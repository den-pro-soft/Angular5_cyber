import { RouterModule, Routes } from '@angular/router';
import { NavModule } from './modules/nav/nav.module';

const routes: Routes = [{ path: '**', loadChildren: () => NavModule }];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: false });