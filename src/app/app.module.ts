import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadPage } from '../pages/read/read';
import { LearnPage } from '../pages/learn/learn';
import { ContactPage } from '../pages/contact/contact';
import { FeedsPage } from '../pages/feeds/feeds';
import { RssProvider } from '../providers/rss-service/rss-service';
import { IntroPage } from '../pages/intro/intro';

import { HttpModule } from '@angular/http';
import { InAppBrowser} from '@ionic-native/in-app-browser'
import { YtProvider } from '../providers/yt/yt';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player'
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage,
    FeedsPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage,
    FeedsPage, 
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssProvider,
    InAppBrowser,
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
