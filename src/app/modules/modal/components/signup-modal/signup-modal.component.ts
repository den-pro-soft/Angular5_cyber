import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AuthModel } from '@app/models';
import { RestService } from '@app/service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {
  public signModel: AuthModel;
  public flagState: string;
  public error_msg: {
    email_error: string,
    pass_error: string,
  };
  public countryNames: any = [
    {value: 'US', name : 'United States'},
    {value: 'AU', name : 'Australia'},
    {value: 'AT', name : 'Austria'},
    {value: 'BE', name : 'Belgium'},
    {value: 'BR', name : 'Brazil'},
    {value: 'CA', name : 'Canada'},
    {value: 'CN', name : 'China'},
    {value: 'DK', name : 'Denmark'},
    {value: 'FI', name : 'Finland'},
    {value: 'FR', name : 'France'},
    {value: 'DE', name : 'Germany'},
    {value: 'HK', name : 'Hong Kong'},
    {value: 'IE', name : 'Ireland'},
    {value: 'IT', name : 'Italy'},
    {value: 'JP', name : 'Japan'},
    {value: 'LU', name : 'Luxembourg'},
    {value: 'MX', name : 'Mexico'},
    {value: 'NL', name : 'Netherlands'},
    {value: 'NZ', name : 'New Zealand'},
    {value: 'NO', name : 'Norway'},
    {value: 'PT', name : 'Portugal'},
    {value: 'SG', name : 'Singapore'},
    {value: 'ES', name : 'Spain'},
    {value: 'SE', name : 'Sweden'},
    {value: 'CH', name : 'Switzerland'},
    {value: 'GB', name : 'United Kingdom'}
  ];
  public location: any;

  constructor(private restService: RestService, public dialogRef: MatDialogRef<SignupModalComponent>) {
    console.log("---------------------------");
    console.log(this.location);

    this.signModel = {
      username: "",
      email: "",
      placeResidence: "China",
    };
    this.flagState = 'cn';
    this.onChangeCountry();
    this.error_msg = {
      email_error: "",
      pass_error: "",
    };
  }

  ngOnInit() {
    console.log(this.location);
    this.restService.getCountryfromIp().subscribe((resp) => {
      this.location = resp;
      this.signModel = {
        username: "",
        email: "",
        placeResidence: this.countryNames.find((res) => res.value == this.location.country).name,
      };
    });
    this.onChangeCountry();
  }

  onChangeCountry() {
    console.log("++++++++");

    this.flagState = this.countryNames.find((res) => res.name == this.signModel.placeResidence).value.toLowerCase();
  }

  emailFocus() {
    this.error_msg.email_error = "";
  }

  passFocus() {
    this.error_msg.pass_error = "";
  }

  SignUp() {
    if (!this.signModel.email.includes('@')) {
      this.error_msg.email_error = "Please input email correctly!";
      this.signModel.email = "";
      return;
    }

    this.dialogRef.close(this.signModel);
  }
}
