import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const routes = {
    pccs : 'pccs',
    about : 'about',
    bg_media : 'bg-media',
    nServices: 'nServices',
};

@Injectable()
export class RouterService {

  constructor(private router : Router) { }

  to_pccs(){
      this.redirectTo(routes.pccs);
  }

  to_about(){
      this.redirectTo(routes.about);
  }

  to_bg_media(){
      this.redirectTo(routes.bg_media);
  }

  to_nServices(){
      this.redirectTo(routes.nServices);
  }

  redirectTo(commands: string)
  {
      this.router.navigate([commands]);
  }
}