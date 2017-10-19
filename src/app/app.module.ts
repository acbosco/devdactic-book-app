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
    IonicModule.forRoot(MyApp)
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
    RssProvider
  ]
})
export class AppModule {}
