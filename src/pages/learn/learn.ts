import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider, VideoItem } from '../../providers/yt/yt';
@Component({
    selector: 'page-learn',
    templateUrl: 'learn.html'
})
export class LearnPage {
    learnType = 'courses';
    course1Url = 'http://courses.devdactic.com/p/ionic-by-doing';
    course2Url = 'http://courses.devdactic.com/p/ionic-2-in-one-hour';
    videos = [];

    constructor(public navCtrl: NavController, public iab: InAppBrowser, public yt: YoutubeVideoPlayer, public ytProvider: YtProvider) {
      this. ytProvider.getChannelVideos().subscribe(data => {
        this.videos = data;
      })
}
public playVideo(id: string) {
  this.yt.openVideo(id);
}
public openUrl(url: string) {
  this.iab.create(url, '_blank');
}}