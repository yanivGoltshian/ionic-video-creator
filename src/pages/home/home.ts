import { Component, AfterViewInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { clamp } from 'ionic-angular/util/util';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CloudinaryService } from '../../services/CloudinaryService';
import { PlayPage } from '../play/play';
import { VideoSpecService } from '../../services/VideoSpecService';
import { GeneratorService } from "../../services/GeneratorService";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  @ViewChild(Slides) slides: Slides;
  playPage = PlayPage;
  isGenerating: boolean;
  currentSlideIndex: number = 0;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public camera: Camera,
    public cloudinaryService: CloudinaryService,
    public videoSpecService: VideoSpecService,
    private generatorService: GeneratorService,
    private alertCtrl: AlertController) {
    this.isGenerating = false;
    this.videoSpecService.newScene();
  }

  ngAfterViewInit() {
    this.slides.ionSlideDidChange.subscribe(() => {
      this.currentSlideIndex = this.slides.getActiveIndex();
    });
  }

  async addScene() {
    this.videoSpecService.addSceneAfter(this.currentSlideIndex);
    setTimeout(() => this.slides.slideNext(), 100);
  }

  removeImage(scene) {
    delete scene.base64Image;
    delete scene.imageUrl;
    delete scene.imageUrlStyle;
  }

  async addCamera(scene) {
    return this.addImage(scene, true);
  }

  async addImage(scene, useCam) {
    scene.loading = true;

    try {
      const imageData = await this.camera.getPicture({
        sourceType: useCam ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      });

      scene.base64Image = `data:image/jpeg;base64,${imageData}`;
      delete scene.imageUrlStyle;
      scene.imageUrl = await this.cloudinaryService.uploadBase64Image(scene.base64Image);
      scene.imageUrlStyle = `url(${scene.imageUrl})`;
    } catch (error) {
      console.error(error);
    }
    scene.loading = false;
  }

  async juggle() {
    if (!this.isReadyToJuggle()) {
      this.showValidationAlert();
      return;
    }

    const spec = this.videoSpecService.buildVideoSpec();
    // console.log(spec);
    this.generateVideo(spec);
  }

  async generateVideo(videoData) {
    this.isGenerating = true;
    let loader = this.createLoader();
    loader.present();

    try {
      const response: any = await this.generatorService.generateVideo(videoData)
      await this.generatorService.waitForVideoReady(response.temp.webm.src);
      this.isGenerating = false;
      loader.dismiss();
      this.navCtrl.push(PlayPage, {
        videoObj: response.temp
      });
    } catch (error) {
      console.error(JSON.stringify(error));
      loader.dismiss();
      this.showVideoGenerationError();
    }
  }

  createLoader() {
    return this.loadingCtrl.create({
      content: "<video autoplay loop>" +
        "<source src='https://img.playbuzz.com/video/upload/vc_h264/v1516279729/wjorshthsqfucvpy0ulc.mp4'>" +
        "</video>",
      spinner: 'hide',
      cssClass: 'videoOverlayLoader',
      showBackdrop: false
    });
  }

  isSceneRemovable(scene) {
    return this.videoSpecService.scenes.length > 1;
  }

  removeScene(scene) {
    const idx = this.slides.getActiveIndex();
    this.slides.slideTo(idx === 0 ? 0 : idx - 1);
    this.videoSpecService.removeScene(scene);
  }

  isReadyToJuggle() {
    return this.videoSpecService.areScenesValid();
  }

  private showValidationAlert() {
    let alert = this.alertCtrl.create({
      title: 'Missing content',
      subTitle: 'Please add images to all scenes',
      buttons: ['OK']
    });
    alert.present();
  }

  private async showVideoGenerationError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Video generation failed.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
