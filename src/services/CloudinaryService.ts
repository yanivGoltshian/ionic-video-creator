import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class CloudinaryService {
    constructor(private http: HttpClient) { }

    async uploadBase64Image(base64Image) {
        const cloudName = 'playbuzz-cld';
        const unsignedUploadPreset = 'unsigned1';
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        var fd = new FormData();

        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', 'browser_upload');
        fd.append('file', base64Image);

        const response: any = await this.http.post(url, fd).toPromise();

        return response.secure_url;

        // var redicertToFbUrl = response.videosYouCanCrosspostURL;
        // window.open(redicertToFbUrl, '_system');
        // return response.success;
    }
}
