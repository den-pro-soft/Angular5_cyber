import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared';
import { OwlModule } from 'ngx-owl-carousel';
import { ShareModule } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonModule } from '@ngx-share/button';
import { SignupModalComponent, BlogModalComponent, LoginModalComponent } from './components';
import { UserService, LocalStorageService, ErrorHandlerService } from '@app/service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OwlModule,
    FontAwesomeModule,
    ShareButtonModule.forRoot()
  ],
  providers: [ UserService, LocalStorageService, ErrorHandlerService ],
  entryComponents : [ BlogModalComponent, SignupModalComponent, LoginModalComponent ],
  declarations: [BlogModalComponent, SignupModalComponent, LoginModalComponent]
})
export class ModalModule { }
