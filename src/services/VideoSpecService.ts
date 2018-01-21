import { Injectable } from '@angular/core';

@Injectable()
export class VideoSpecService {
    public scenes: any[];
    private idCounter: number = 1;

    constructor() {
        this.scenes = [];
    }

    newScene() {
        this.scenes.push({
            id: this.newId()
        })
    }

    private newId() {
        return this.idCounter++;
    }

    addSceneAfter(currentSceneIndex) {
        this.scenes.splice(currentSceneIndex + 1, 0, [{
            id: this.newId()
        }]);
    }

    removeScene(scene) {
        const index = this.scenes.findIndex(x => x.id === scene.id);

        if (index !== -1) {
            this.scenes.splice(index + 1, 1);
        }
    }

    buildVideoSpec() {
        if (this.areScenesValid()) {
            const spec = this.buildBasicSpec();

            spec.lineup = [
                this.buildIntroScene(),
                ...this.buildContentScenes(),
                this.buildOutroScene(),
            ];

            return spec;
        }
    }

    areScenesValid() {
        return this.scenes.length > 0 &&
            this.scenes.every(x => !!x.imageUrl);
    }

    buildBasicSpec() {
        const spec = {
            "projectid": "playbuzz_videoCreator",
            "animationBase": "s3://sundaysky-authoring-repository/animations/playbuzz/juggler/latest/",
            "output": {},
            "background": {
                "audio": {
                    "href": "https://cdn.playbuzz.com/video-creator-folders/video-creator-music/High_Energy/978111_87486219.mp3",
                    "role": "music"
                }
            },
            "lineup": [
            ]
        };
        return spec;
    }

    buildIntroScene() {
        const scene = this.scenes[0];

        const intro = {
            "name": "INTRO",
            "animation": {
                "href": "INTRO/INTRO.vsml"
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": scene.imageUrl
                        }
                    }
                },
                "text": {
                    "first": scene.text
                }
            }
        };

        return intro;
    }

    buildContentScenes() {
        const [intro, ...contentScenes] = this.scenes;
        contentScenes.pop();

        const builtContentScenes = contentScenes.map((scene, index) => {
            return this.buildItemScene(scene, index % 2 + 1);
        });

        return builtContentScenes;
    }

    buildItemScene(scene, index) {
        const item = {
            "name": `ITEM_${index}`,
            "animation": {
                "href": `ITEM_${index}/ITEM_${index}.vsml`
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": scene.imageUrl
                        }
                    }
                },
                "text": {
                    "first": scene.text
                }
            }
        };

        return item;
    }

    buildOutroScene() {
        let imageUrl = '';
        let text = '';

        if (this.scenes.length > 1) {
            const lastScene = this.scenes[this.scenes.length - 1];
            imageUrl = lastScene.imageUrl || '';
            text = lastScene.text || '';
        }

        const outroScene = {
            "name": "OUTRO",
            "animation": {
                "href": "OUTRO/OUTRO.vsml"
            },
            "transition": {
                "duration": 1.6,
                "style": "overlay"
            },
            "data": {
                "transition": 2,
                "media": {
                    "first": {
                        "image": {
                            "source": imageUrl
                        }
                    }
                },
                "text": {
                    "first": text
                }
            }
        };

        return outroScene;
    }
}
