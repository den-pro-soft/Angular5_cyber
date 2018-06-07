import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PccsMainComponent } from './components';
import { PccsDashboardComponent } from './components';
import { PccsResetComponent } from './components';
import { AuthGuard } from '@app/guards';

const routes: Routes = [
	{ 
		path: '', component: PccsMainComponent,		
		children: [
	      { path: 'dashboard', canActivate: [AuthGuard], component: PccsDashboardComponent },
	      { path: 'reset', component: PccsResetComponent },
	    ]	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PccsRoutingModule { }
