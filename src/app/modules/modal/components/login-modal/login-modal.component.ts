import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { LoginModel, ErrorModel } from '@app/models';
import { UserService, LocalStorageService, ErrorHandlerService } from '@app/service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public loginModel: LoginModel;
  public error_msg: {
  	email_error: string,
  	pass_error: string,
  	login_error: string,
  };

  constructor(
  	public dialogRef: MatDialogRef<LoginModalComponent>, 
  	private userService: UserService, 
  	private errorHandlerService: ErrorHandlerService) {
    this.loginModel = {
      email: "",
      password: "",
    };
    this.error_msg = {
    	email_error: "",
    	pass_error: "",
    	login_error: ""
    };
  }

  ngOnInit() {
  }

  emailFocus() {
    this.error_msg.email_error = "";
    this.error_msg.login_error = "";
  }

  passFocus() {
    this.error_msg.pass_error = "";
    this.error_msg.login_error = "";
  }

  Login() {
    if (!this.loginModel.email.includes('@')) {
      this.error_msg.email_error = "Please input email correctly!";
      this.loginModel.email = "";
      return;
    }

    if (this.loginModel.password.length < 8) {
      this.error_msg.pass_error = "Password length is too low. Input password correctly.";
      this.loginModel.password = "";
      return;
    }

    var flag = false;
    console.log("sdfsd");
  	this.userService.login(this.loginModel)
      .subscribe((result) =>
        {
  		    var data = {
  		    	token: result['token'],
  		    	user: this.loginModel,
            no_reset: result['is_loggedin']
  		    }
        	console.log(data)
        	this.dialogRef.close(data);
        },
        (error: ErrorModel) =>
        {
        	this.error_msg.login_error = error['non_field_errors'][0];
        	this.errorHandlerService.showError(error);
        }
      );
  }

}
