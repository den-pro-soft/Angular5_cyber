import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavMainComponent, BgAndMediaComponent, NServicesComponent, PccsComponent, AboutComponent } from './components';

const routes: Routes = [
	{ path: '', component: NavMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
