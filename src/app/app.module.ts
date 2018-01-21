import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlayPage } from '../pages/play/play';
import { CloudinaryService } from '../services/CloudinaryService';
import { VideoSpecService } from '../services/VideoSpecService';
import { GeneratorService } from '../services/GeneratorService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CloudinaryService,
    VideoSpecService,
    GeneratorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
  ]
})
export class AppModule {}
