import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from './AppConstants'

@Injectable()
export class GeneratorService {
  http: HttpClient;
  generateUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.generateUrl = AppConstants.API_ENDPOINT;
  }

  generateVideo(videoData) {
    const url = this.generateUrl + '/mobile/generate';
    const requestConfig = {
      videoData: videoData,
    };
    return this.http.post(url, requestConfig).toPromise();
  }

  waitForVideoReady(src) {
    return this.http.head(src, { responseType: 'arraybuffer' }).toPromise();
  }
}
