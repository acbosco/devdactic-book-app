import { RssProvider, FeedItem } from './../../providers/rss-service/rss-service';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
    selector: 'page-feeds',
    templateUrl: 'feeds.html'
})
export class FeedsPage {
    selectedCategory = '';78
    articles: FeedItem[];
    loading: Boolean;
    constructor(private iab: InAppBrowser, private navParams: NavParams, private rssProvider: RssProvider) {
        let passedCat = navParams.get('category');
        if (passedCat !== undefined) {
        this.selectedCategory = passedCat;
        }
        this.loadArticles();
    }
    loadArticles() {
        this.articles = [];
        this.loading = true;
        this.rssProvider.getArticlesForCategory(this.selectedCategory).subscribe(res => {
            this.articles = res;
            this.loading = false;
        });
    }
    public openArticle(url: string) {
        this.iab.create(url, 'blank');
    }
}