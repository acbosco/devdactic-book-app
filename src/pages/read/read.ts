import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { FeedsPage } from '../feeds/feeds';
@Component({
selector: 'page-read',
templateUrl: 'read.html'
})
export class ReadPage {
@ViewChild(Nav) nav: Nav;
rootPage: any = FeedsPage;
categories: Array<{title: string, key: string}>;
constructor() {
this.categories = [
{ title: 'Mobile Development', key: 'mobile' },
{ title: 'Web Development', key: 'web' },
{ title: 'Productivity', key: 'productivity' },
{ title: 'Dev Thoughts', key: 'dev-thoughts' }
];
}
public reloadFeed(cat: string) {
this.nav.setRoot(FeedsPage, {category: cat});
}
}
