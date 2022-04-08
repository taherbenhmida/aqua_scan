import { NgModule, Component, enableProdMode } from '@angular/core';

import { Service, EuropeanUnion } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class App2Component {
  dataSource: EuropeanUnion[];

  placeholder = 'Search...';

  rtlEnabled = true;

  languages: string[] = ['Arabic (Right-to-Left direction)', 'English (Left-to-Right direction)'];

  constructor(service: Service) {
    this.dataSource = service.getEuropeanUnion();
  }

  selectLanguage(data) {
    data.value === this.languages[0];
    this.placeholder = this.rtlEnabled ? 'بحث' : 'Search...';
  }
}



