import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ErrorModel, UserModel } from 'app/models';

import { ApiErrorHandlerService } from '../other-services/api-error-handler.service';

import { AuthModel, LoginModel, ResetModel } from '@app/models';

@Injectable()
export class UserService
{
    url = 'rest-auth';

    constructor(private http: HttpClient)
    {
    }
    
    login(model: LoginModel): Observable<{ token: string, user: UserModel } | ErrorModel>
    {
        return this.http
            .post<{ token: string, user: UserModel }>(this.url + '/login/', model)
            .pipe(
                catchError(ApiErrorHandlerService.handleError)
            );
    }

    restpass(email: any): Observable<{ uid: string, token: string } | ErrorModel>
    {
        return this.http
            .post<{ uid: string, token: string }>(this.url + '/password/reset/', email)
            .pipe(
                catchError(ApiErrorHandlerService.handleError)
            );
    }

    restpassconfirm(model: ResetModel): Observable<{ token: string, is_loggedin: boolean } | ErrorModel>
    {
        return this.http
            .post<{ token: string, is_loggedin: boolean }>(this.url + '/password/reset_after_login/', model)
            .pipe(
                catchError(ApiErrorHandlerService.handleError)
            );
    }

    logout(): Observable<boolean | ErrorModel>
    {
        const url = this.url + '/logout/';

        return this.http
            .get<boolean>(url)
            .pipe(
                catchError(ApiErrorHandlerService.handleError)
            );
    }

    signup(model: AuthModel): Observable<{ token: string, user: UserModel } | ErrorModel>
    {
        const url = this.url + '/registration';

        return this.http
            .post<{ token: string, user: UserModel }>(url, model)
            .pipe(
                catchError(ApiErrorHandlerService.handleError)
            );
    }
}