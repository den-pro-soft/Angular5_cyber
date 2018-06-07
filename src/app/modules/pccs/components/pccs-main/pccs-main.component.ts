import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { MatDialog } from '@angular/material';
import { SignupModalComponent, LoginModalComponent } from '@app/modules/modal/components';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, finalize } from 'rxjs/operators';
import {
    UserService,
    RestService,
    ErrorHandlerService,
    LocalStorageService,
    RouterService
} from '@app/service';

import { ErrorModel, LoginModel, UserModel, AuthModel } from '@app/models';

@Component({
  selector: 'app-pccs-main',
  templateUrl: './pccs-main.component.html',
  styleUrls: ['./pccs-main.component.scss']
})

export class PccsMainComponent implements OnInit {

  credential: AuthModel;
  isLoggedIn: boolean;
  isSignup: boolean;
  location: any;
  private ngUnsubscribe = new Subject();
  loginModel: LoginModel = { email: '', password: '' };

  constructor( private userService: UserService, 
    private restService: RestService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private routerService: RouterService,
    public dialog: MatDialog
  )
  {}

  ngOnInit() {
    const token = LocalStorageService.getToken();
    const user = LocalStorageService.getUser();
    const rst_flag = LocalStorageService.get_front_reset();
    console.log(token);
    console.log(user);
    this.isSignup = false;

    if (!token || !user)
    {
        this.isLoggedIn = true;
        this.routerService.afterLogoutPage();
    }
    else
    {
        this.isLoggedIn=true;
        if (rst_flag == true){
          this.routerService.afterLoginPage();
        }
    }
  }
  pccs_func() {}
  check_email_func() {}
  pccs_signup_func() {

    var self=this;

    const dialogRef = self.dialog.open(SignupModalComponent, {panelClass : "signup-modal"});
    
    dialogRef.afterClosed()
      .subscribe(result => {
          if(!result){
            return;
          }
          self.credential = result;
          self.signup();
      });
  }


  ngOnDestroy()
  {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }

  signup() {
    this.userService.signup(this.credential)
        .pipe(
          takeUntil(this.ngUnsubscribe)
        )
        .subscribe((data: { token: string, user: UserModel }) =>
            {
                this.isSignup = true;
            },
            (error: ErrorModel) =>
            {
                this.errorHandlerService.showError(error);
            }
        );
  }

  pccs_login_func()
  {

      const dialogRef = this.dialog.open(LoginModalComponent);

      dialogRef.afterClosed()
        .subscribe(result => {
            if(!result){
              return;
            }
            console.log(result);
            console.log("-0-------");
            var flag = LocalStorageService.get_front_reset();
            LocalStorageService.login(result);
            this.isLoggedIn = true;

            if (!flag) {
              this.routerService.resetPage();
            }
            else {
              this.routerService.afterLoginPage();
            }            
        });
  }

  pccs_logout_func()
  {
    this.userService.logout()
        .pipe(
            takeUntil(this.ngUnsubscribe),
        )
        .subscribe(
            (isLoggedOut: boolean) =>
            {
                if (isLoggedOut)
                {
                    LocalStorageService.logout();
                    this.routerService.afterLogoutPage();
                    this.isLoggedIn = false;
                    this.isSignup = false;
                }
            },
            (error: ErrorModel) =>
            {
                this.errorHandlerService.showError(error);
            }
        );
  }
}
