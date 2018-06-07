import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const routes = {
    pccs : 'pccs',
    about : 'about',
    bg_media : 'bg-media',
    nServices: 'nServices',
    blogs: 'blog-page',
    nav_main: 'main',
    pageAfterLogout: 'pccs',
    pageAfterLogin: 'pccs/dashboard',
    resetPage: 'pccs/reset',
};

@Injectable()
export class RouterService {

  constructor(private router : Router) { }

  to_about() {
      this.redirectTo(routes.about);
  }

  to_bg_media() {
      this.redirectTo(routes.bg_media);
  }

  to_nServices() {
      this.redirectTo(routes.nServices);
  }

  to_blogPage() {
      this.redirectTo(routes.blogs);
  }

  to_mainPage() {
      this.redirectTo(routes.nav_main);
  }

  to_pccsPage() {
      this.redirectTo(routes.pccs);
  }

  afterLoginPage() {
      this.redirectTo(routes.pageAfterLogin);
  }

  afterLogoutPage() {
      this.redirectTo(routes.pageAfterLogin);
  }

  resetPage() {
      this.redirectTo(routes.resetPage);
  }

  redirectTo(commands: string)
  {
      this.router.navigate([commands]);
  }
}