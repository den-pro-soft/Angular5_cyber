import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service';
import { BlogModel } from '@app/models';
import { RouterService } from '@app/service';
import { MatDialog } from '@angular/material';
import { BlogModalComponent } from '@app/modules/modal/components';

@Component({
  selector: 'app-bg-and-media',
  templateUrl: './bg-and-media.component.html',
  styleUrls: ['./bg-and-media.component.scss']
})

export class BgAndMediaComponent implements OnInit {

	top_blogs = [];

	constructor(
    private blogRest: RestService,
    private routerService : RouterService,
    public dialog: MatDialog
  ) {}

	ngOnInit() {
		this.blogRest.getTopBlogs().subscribe((result) => {
        console.log(result);
        var self = this;

        result['top-blogs'].forEach(function (value, i) {
          let t = {
            bgcont : value,
            clicked : false
          };
          self.top_blogs.push(t);
        });
		});

	}

	click_blog(flag: number) {
      const dialogRef = this.dialog.open(BlogModalComponent);

      dialogRef.componentInstance.blog_data = this.top_blogs[flag].bgcont;
      dialogRef.componentInstance.images = this.top_blogs[flag].bgcont['images'];
	}

  toBlogPage() {
    this.routerService.to_blogPage();
  }

}
