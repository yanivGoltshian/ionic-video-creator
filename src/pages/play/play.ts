import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, LoadingController, NavParams, Platform } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {
  videoObj: any;
  videoSrc: string;
  sourceType: string;
  state: any;
  videosYouCanCrosspostURL: any;

  constructor(
    private http: HttpClient,
    private params: NavParams,
    public plt: Platform
  ) {
    this.videoObj = params.get('videoObj');
    this.state = 'DEFAULT';
    console.log(this.videoObj);

    if (this.plt.is('ios')) {
      this.videoSrc = this.videoObj.m3u8.src;
      this.sourceType = 'audio/x-mpegurl';
    } else {
      this.videoSrc = this.videoObj.webm.src;
      this.sourceType = 'video/webm';
    }
  }

  onVideoReady() {
    console.log("video is ready");
  }

  async saveVideo() {
  }

  async crosspost() {
    this.state = 'UPLOADING';
    //let videoUrl = 'http://img.playbuzz.com/video/upload/w_200,h_720,g_center,c_crop/up0szhaqpakhv4dnzpkz.mp4';
    const url = `https://stg-video-creator.playbuzz.com/mobile/crossPostVideo`;

    var request = {
      videoUrl: this.videoObj.webm.src,
      facebookPageUrl: "https://www.facebook.com/yosefKaro7TLV",
      sectionId: "79084e72-1125-4d37-a6a9-62837ca660f9",
      itemId: "12277a5f-d3e7-4c3e-8614-a13a23c3f0c4"
    };

    try {
      var response: any = await this.http.post(url, request).toPromise();
      this.videosYouCanCrosspostURL = response.videosYouCanCrosspostURL;
      this.state = 'UPLOAD_COMPLETE';
    } catch (error) {
      console.error(error);
    }
  }
}
