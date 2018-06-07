import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogComponent } from './blog/blog.component';
import { RestService, PaginationService, RouterService } from '@app/service';
import { SharedModule } from '@app/shared';
import { ModalModule } from '@app/modules/modal/modal.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SubscriberComponent } from './blog/subscriber/subscriber.component';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    ModalModule,
	HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [RestService, PaginationService, RouterService],
  declarations: [BlogComponent, SubscriberComponent]
})
export class BlogsModule { }
