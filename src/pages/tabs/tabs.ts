import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
import { LearnPage } from '../learn/learn';
import { ContactPage } from '../contact/contact';
@Component({
selector: 'page-tabs',
templateUrl: 'tabs.html'
})
export class TabsPage {
public tab1Root: any = ReadPage;
public tab2Root: any = LearnPage;
public tab3Root: any = ContactPage;
constructor() {
}
}
