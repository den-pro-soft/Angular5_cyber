import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service';
import { BlogModel } from '@app/models';

@Component({
  selector: 'app-bg-and-media',
  templateUrl: './bg-and-media.component.html',
  styleUrls: ['./bg-and-media.component.scss']
})
export class BgAndMediaComponent implements OnInit {

	top_blogs = [];

	constructor( private blogRest: RestService ) {
  }

	ngOnInit() {
		this.blogRest.getTopBlogs().subscribe((result) => {
        for(let item of result['top-blogs']){
          let t = {
            bgcont : item,
            clicked : false
          };
          this.top_blogs.push(t);
        }
		});

	}

	click_blog(flag: number) {
		this.top_blogs[flag].clicked = !this.top_blogs[flag].clicked;
	}

}
