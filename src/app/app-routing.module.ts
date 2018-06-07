import { RouterModule, Routes } from '@angular/router';
import { NavModule, BlogsModule, PccsModule } from './modules';

const routes: Routes = [
	{ path: 'blog-page', loadChildren: () =>  BlogsModule},
	{ path: 'main', loadChildren: () => NavModule },
	{ path: 'pccs', loadChildren: ()=>  PccsModule},
	{ path: '', redirectTo : 'main', pathMatch : 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: false });