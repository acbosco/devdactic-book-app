import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { IntroPage } from '../pages/intro/intro';
@Component({
template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
rootPage = IntroPage;
constructor(platform: Platform, private statusBar: StatusBar) {
platform.ready().then(() => {
this.statusBar.styleDefault();
});
}
}
