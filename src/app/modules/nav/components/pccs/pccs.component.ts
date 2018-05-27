import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pccs',
  templateUrl: './pccs.component.html',
  styleUrls: ['./pccs.component.scss']
})
export class PccsComponent implements OnInit {


  public images: string[] = [
     'assets/side_img2.jpg',
     'assets/side_img3.jpg',
     'assets/slide_img1.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
