import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class API {
  	result: String;
  	error: String;
}

@Injectable()
export class RestService {
  	private apiUrl = 'http://localhost:8000/api/';

  	constructor( private http: HttpClient ) { }

	getTopBlogs() {
		return this.http.get(this.apiUrl+'blog');
	}

	set_Mailchimp(value: any) {
		console.log(value);
		const body = new HttpParams()
			.set('name', value['name'])
			.set('email', value['email'])
			.set('org', value['org']);

		const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

		return this.http.post(this.apiUrl+'setEmail', body, {headers:myheader});
	}

	getCountryfromIp() {
    	return this.http.get('http://ipinfo.io/json');
	}

	getApi(api, data): Observable<any> {
		return this.http.get(this.apiUrl + api).pipe(catchError(this.handleError({})));
	}

	postApi(api, data): Observable<any> {
		return this.http.post<API>(this.apiUrl + api, data, httpOptions).pipe(catchError(this.handleError({})));
	}

	private handleError<T>(result?: T) {
		return (error: any): Observable<T> => {
	  		console.error(error);
		  	return of(result as T);
		};
	}
}