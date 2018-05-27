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

  disp_cont(flag: number) {
    if (flag == 1) {
      this.disp_flg = 1;
    }
    else if (flag == 2) {
      this.disp_flg = 2;
    }
    else if (flag == 3) {
      this.disp_flg = 3;
    }
    else {
      this.disp_flg = 4;
    }
  }
}
