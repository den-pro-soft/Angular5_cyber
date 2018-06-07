import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PccsMainComponent } from './components';

import { SharedModule } from '@app/shared';
import { RouterService, ErrorHandlerService, LocalStorageService, RestService, UserService } from '@app/service';
    
import { PccsRoutingModule } from './pccs-routing.module';
import { ModalModule } from '@app/modules/modal/modal.module';
import { PccsDashboardComponent } from './components/pccs-dashboard/pccs-dashboard.component';
import { PccsResetComponent } from './components/pccs-reset/pccs-reset.component';
import { AuthGuard } from '@app/guards';

@NgModule({
  imports: [
    CommonModule,
    PccsRoutingModule,
    SharedModule,
    ModalModule
  ],
  providers: [
  	RouterService, 
  	RestService, 
  	UserService, 
  	ErrorHandlerService, 
  	LocalStorageService, 
  	AuthGuard
  ],
  declarations: [PccsMainComponent, PccsDashboardComponent, PccsResetComponent]
})
export class PccsModule { }
