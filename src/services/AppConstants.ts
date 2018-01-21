export class AppConstants {
  public static API_ENDPOINT = 'https://stg-video-creator.playbuzz.com';
  public static LOCAL_API_ENDPOINT = 'https://localhost:8081';
  public static videoData = {
    "projectid": "playbuzz_videoCreator",
    "animationBase": "s3://sundaysky-authoring-repository/animations/playbuzz/the-fifth-element-vert/latest/",
    "output": {},
    "background": {
      "audio": {
        "href": "https://cdn.playbuzz.com/video-creator-folders/video-creator-music/Acoustic/818560_ROCKOLDIES%20Acoustic%20Fun%20FULL%20TRACK%20with%20brass%20section.mp3",
        "role": "music"
      }
    },
    "lineup": [
      {
        "name": "S_SQUARE_01_1",
        "animation": {
          "href": "SQUARE_01/SQUARE_01.vsml"
        },
        "transition": {
          "duration": 1.6,
          "style": "overlay"
        },
        "data": {
          "font": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
          },
          "blocks": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
          },
          "align": "LEFT",
          "textColor": {
            "IsOneTint": true,
            "Tint2": "#fff",
            "Tint1": "#fff",
            "Ratio": 0.5
          },
          "transition": 4,
          "duration": {
            "first": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            },
            "video": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            }
          },
          "color": {
            "primary": {
              "IsOneTint": true,
              "Tint2": "#f3dfa2",
              "Tint1": "#f3dfa2",
              "Ratio": 0.5
            },
            "secondary": {
              "IsOneTint": true,
              "Tint2": "#231f20",
              "Tint1": "#231f20",
              "Ratio": 0.5
            },
            "additional": {
              "IsOneTint": true,
              "Tint2": "#7ebdc2",
              "Tint1": "#7ebdc2",
              "Ratio": 0.5
            }
          },
          "settings": {
            "shape": "arrow",
            "style": "blur,transparency,blocks",
            "pattern": 14
          },
          "media": {
            "first": {
              "image": {
                "source": "https://img.playbuzz.com/image/upload/v1516184011/korvtc3mcejlmsgzafzq.jpg"
              }
            }
          },
          "text": {
            "first": "Super!"
          }
        }
      },
      {
        "name": "S_LANDSCAPE_01_2",
        "animation": {
          "href": "LANDSCAPE_01/LANDSCAPE_01.vsml"
        },
        "transition": {
          "duration": 1.6,
          "style": "overlay"
        },
        "data": {
          "font": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
          },
          "blocks": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
          },
          "align": "LEFT",
          "textColor": {
            "IsOneTint": true,
            "Tint2": "#fff",
            "Tint1": "#fff",
            "Ratio": 0.5
          },
          "transition": 2,
          "duration": {
            "first": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            },
            "video": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            }
          },
          "media": {
            "first": {
              "image": {
                "source": "https://img.playbuzz.com/image/upload/v1516184027/iehq73ims0a3ezkd0csl.jpg"
              }
            }
          },
          "color": {
            "primary": {
              "IsOneTint": true,
              "Tint2": "#f3dfa2",
              "Tint1": "#f3dfa2",
              "Ratio": 0.5
            },
            "secondary": {
              "IsOneTint": true,
              "Tint2": "#231f20",
              "Tint1": "#231f20",
              "Ratio": 0.5
            },
            "additional": {
              "IsOneTint": true,
              "Tint2": "#7ebdc2",
              "Tint1": "#7ebdc2",
              "Ratio": 0.5
            }
          },
          "settings": {
            "shape": "arrow",
            "style": "blur,transparency,blocks",
            "pattern": 14
          },
          "text": {
            "first": "Amazing!"
          }
        }
      },
      {
        "name": "S_SQUARE_03_3",
        "animation": {
          "href": "SQUARE_03/SQUARE_03.vsml"
        },
        "transition": {
          "duration": 1.6,
          "style": "overlay"
        },
        "data": {
          "font": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
          },
          "blocks": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
          },
          "align": "LEFT",
          "textColor": {
            "IsOneTint": true,
            "Tint2": "#fff",
            "Tint1": "#fff",
            "Ratio": 0.5
          },
          "transition": 2,
          "duration": {
            "first": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            },
            "video": {
              "source": "https://img.playbuzz.com/video/upload/eo_2/v1508246184/silence.mp3"
            }
          },
          "color": {
            "primary": {
              "IsOneTint": true,
              "Tint2": "#f3dfa2",
              "Tint1": "#f3dfa2",
              "Ratio": 0.5
            },
            "secondary": {
              "IsOneTint": true,
              "Tint2": "#231f20",
              "Tint1": "#231f20",
              "Ratio": 0.5
            },
            "additional": {
              "IsOneTint": true,
              "Tint2": "#7ebdc2",
              "Tint1": "#7ebdc2",
              "Ratio": 0.5
            }
          },
          "settings": {
            "shape": "arrow",
            "style": "blur,transparency,blocks",
            "pattern": 14
          },
          "media": {
            "first": {
              "image": {
                "source": "https://img.playbuzz.com/image/upload/v1516184045/ljlf8kjh8bjpudpn69xb.jpg"
              }
            }
          },
          "text": {
            "first": "Graphic!"
          }
        }
      },
      {
        "name": "CREDITS_4",
        "animation": {
          "href": "Credits/Credits.vsml"
        },
        "transition": {
          "duration": 2.2,
          "style": "overlay"
        },
        "data": {
          "font": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold.ttf"
          },
          "blocks": {
            "regular": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Regular-blocks.ttf",
            "medium": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf",
            "bold": "https://cdn.playbuzz.com/video-creator-folders/video-creator-fonts/PB_RobotoSlab-Bold-blocks.ttf"
          },
          "align": "LEFT",
          "textColor": {
            "IsOneTint": true,
            "Tint2": "#fff",
            "Tint1": "#fff",
            "Ratio": 0.5
          },
          "duration": {
            "first": {
              "source": "https://img.playbuzz.com/video/upload/eo_3/v1508246184/silence.mp3"
            },
            "video": {
              "source": "https://img.playbuzz.com/video/upload/eo_3/v1508246184/silence.mp3"
            }
          },
          "Credits": "Getty Images"
        }
      }
    ]
  }
}
