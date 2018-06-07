import { Component, OnInit } from '@angular/core';
import { takeUntil, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {
    UserService,
    RestService,
    ErrorHandlerService,
    LocalStorageService,
    RouterService
} from '@app/service';

@Component({
  selector: 'app-pccs-dashboard',
  templateUrl: './pccs-dashboard.component.html',
  styleUrls: ['./pccs-dashboard.component.scss']
})
export class PccsDashboardComponent implements OnInit {

  constructor(
  	private userService: UserService, 
    private restService: RestService,
    private errorHandlerService: ErrorHandlerService,
    private routerService: RouterService,
  ) {
  	console.log("hello");
  }
  private ngUnsubscribe = new Subject();

  ngOnInit() {
  }

}
