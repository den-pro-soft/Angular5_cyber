import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

import * as data from 'statics/layout/layout.json';
import { RouterService } from '@app/service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  disp_flg = 1;

  constructor(
      private routerService : RouterService
  ) {}

  ngOnInit() {
  }

  to_pccsPage() {
    this.routerService.to_pccsPage();
  }
}
