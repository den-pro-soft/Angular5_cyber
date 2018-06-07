import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { BlogModel } from '@app/models';
import { faFacebookSquare, faTwitterSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit {

	  fbIcon = faFacebookSquare;
  	tweetIcon = faTwitterSquare;
  	pinIcon = faPinterest; 

  	constructor(public dialogRef: MatDialogRef<BlogModalComponent>) { }

  	blog_data: any;
  	public images: any;

  	ngOnInit() {
  	}

}
