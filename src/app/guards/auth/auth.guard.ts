import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService, LocalStorageService } from '@app/service';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router,
                private authService: UserService)
    {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean
    {
        const token = LocalStorageService.getToken();
        const user = LocalStorageService.getUser();
    	const rst_flag = LocalStorageService.getRestFlag();

        if (!token || !user)
        {
            LocalStorageService.logout();
            this.router.navigate(['/pccs'], { queryParams: { returnUrl: state.url } });

            return false;
        }
        else {
            var flag = LocalStorageService.get_front_reset();
            if (!flag) {
                this.router.navigate(['/pccs/reset'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            return true;
        }
        
        // return this.authService.verify(token)
        //     .pipe(
        //         map((result) =>
        //         {
        //             if (result['token'] == 'ok' && rst_flag == 'true')
        //             	return true;

        //             // error when verify so redirect to login page with the return url
        //             LocalStorageService.logout();
        //             this.router.navigate(['/pccs'], { queryParams: { returnUrl: state.url } });

        //             return false;
        //         }),
        //         catchError((error) =>
        //         {
        //             // error when verify so redirect to login page with the return url
        //             LocalStorageService.logout();
        //             this.router.navigate(['/pccs'], { queryParams: { returnUrl: state.url } });

        //             return of(false);
        //         })
        //     );
    }
}