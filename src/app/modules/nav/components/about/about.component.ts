import { Component, OnInit } from '@angular/core';
import { AboutModel } from '@app/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

	about_data = [];

  	constructor() { }

  	ngOnInit() {
 //------------------------Temporary output data---------- 
 		var model = {
 			name: "Bernard Lee",
 			pos: "CTO",
 			advisor_name: "",
 			advisor_pos: "",
 		};

 		this.about_data.push(model);

 		model = {
 			name: "Leo Tong",
 			pos: "Founder & CEO",
 			advisor_name: "Dr. Duncan Wong",
 			advisor_pos: "Advisor & Cryptographer",
 		};

  		this.about_data.push(model);

 		model = {
 			name: "Emzar Chaduneli",
 			pos: "System Developer",
 			advisor_name: "",
 			advisor_pos: "",
 		};

  		this.about_data.push(model);
  	}

}
