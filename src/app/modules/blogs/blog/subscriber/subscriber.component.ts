import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, FormBuilder, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RestService, PaginationService } from '@app/service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

	sb_success: Boolean;
	form: FormGroup;
  	matcher = new MyErrorStateMatcher();

  	constructor(private formBuilder: FormBuilder, private restService: RestService) {
  		this.sb_success = false;
  		this.form = this.formBuilder.group({
  			emailFormControl: new FormControl('', [
		    	Validators.required,
		    	Validators.email,
		  	]),

			nameFormControl: new FormControl('', [
				Validators.required,
			]),
			orgFormControl: new FormControl('', [
				Validators.required,
			]),
  		});
  	}

  	ngOnInit() {
  	}

  	subscribe() {
  		console.log("Subscribe");

  		if (this.form.valid) {
	  		console.log(this.form.get('nameFormControl').value);
	  		var body = {
	  			name: this.form.get('nameFormControl').value,
	  			email: this.form.get('emailFormControl').value,
	  			org: this.form.get('orgFormControl').value
	  		}

	  		var self = this;
			this.restService.set_Mailchimp(body)
				.subscribe((result) => {
			        self.sb_success = true;
				});
  		}
  	}
}
