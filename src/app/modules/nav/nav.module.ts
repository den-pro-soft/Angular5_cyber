import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { PccsComponent } from './components/pccs/pccs.component';
import { NServicesComponent } from './components/n-services/n-services.component';
import { BgAndMediaComponent } from './components/bg-and-media/bg-and-media.component';
import { AboutComponent } from './components/about/about.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { SharedModule } from 'app/shared';
import { RouterService, RestService } from 'app/service';
import { OwlModule } from 'ngx-owl-carousel';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { BlogsModule } from '@app/modules/blogs/blogs.module';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
    SharedModule,
    OwlModule,
    BlogsModule,
    ScrollToModule.forRoot()
  ],
  providers: [RouterService, RestService],
  declarations: [PccsComponent, NServicesComponent, BgAndMediaComponent, AboutComponent, NavMainComponent]
})
export class NavModule { }
