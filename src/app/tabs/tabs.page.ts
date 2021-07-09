import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  title = 'One';

  constructor() {}

  change(evt: { tab: string }) {
    switch (evt.tab) {
      case 'tab1':
        this.title = 'One';
        break;
      case 'tab2':
        this.title = 'Two';
        break;
      case 'tab3':
        this.title = 'Three';
        break;

      default:
        this.title = 'Not sure...';
    }
  }
}
