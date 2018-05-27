import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor( private http: HttpClient ) { }

  getTopBlogs() {
  	return this.http.get("statics/blogs/blog.json");
  }

}