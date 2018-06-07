import { Component, OnInit } from '@angular/core';
import { RestService, PaginationService } from '@app/service';
import { RouterService } from '@app/service';
import { MatDialog } from '@angular/material';
import { BlogModalComponent } from '@app/modules/modal/components';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    constructor(
    	private blogRest: RestService,
    	private pagerService: PaginationService,
    	private routerService : RouterService,
    	public dialog: MatDialog
    ) {}

	// array of all items to be paged
	blogs = [];
	// pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

  	ngOnInit() {
		this.blogRest.getTopBlogs().subscribe((result) => {
	        console.log(result);
	        var self = this;

	        result['top-blogs'].forEach(function (value, i) {
	        	if (i >= 3) {
		          let t = {
		            bgcont : value,
		            clicked : false
		          };
		          self.blogs.push(t);
	        	}
	        });

	        self.setPage(1);
		});
  	}

	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.blogs.length, page);

        // get current page of items
        this.pagedItems = this.blogs.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    toMainPage() {
    	this.routerService.to_mainPage();
    }

    click_blog(ind: number) {
    	const dialogRef = this.dialog.open(BlogModalComponent);

    	dialogRef.componentInstance.blog_data = this.pagedItems[ind].bgcont;
    }
}
