import { Component, OnInit } from '@angular/core';
import { ResetModel, ErrorModel } from '@app/models';
import { UserService, LocalStorageService, ErrorHandlerService, RouterService } from '@app/service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-pccs-reset',
  templateUrl: './pccs-reset.component.html',
  styleUrls: ['./pccs-reset.component.scss']
})
export class PccsResetComponent implements OnInit {

  public rs_pass: ResetModel;
  public error_msg: string;
  private ngUnsubscribe = new Subject();

  constructor(
  	private userService: UserService, 
  	private errorHandlerService: ErrorHandlerService,
  	private routerService: RouterService) {
    this.rs_pass = {
      	new_password1: "",
      	new_password2: "",
    };
  }

  ngOnInit() {
  }

  passFocus() {
    this.error_msg = "";
  }

  ResetPass() {
    if (this.rs_pass.new_password1.length < 5) {
      this.error_msg = "Password length is too low. Input password correctly.";
      this.rs_pass.new_password1 = "";
      this.rs_pass.new_password2 = "";
      return;
    }

    var flag = false;
    console.log("sdfsd");
    const user = LocalStorageService.getUser();
    console.log(user);

  	this.userService.restpassconfirm(this.rs_pass)
      .subscribe((result) =>
        {
        	console.log("----result resetpassconfirm----");
        	console.log(result);
          LocalStorageService.setToken(result['token']);
          LocalStorageService.setRestFlag(true);
          LocalStorageService.set_front_reset(true);
          this.routerService.afterLoginPage();
        },
        (error: ErrorModel) =>
        {
        	this.error_msg = error['non_field_errors'][0];
        	this.errorHandlerService.showError(error);
        }
      );
  }
}
