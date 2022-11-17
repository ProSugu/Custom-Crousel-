import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() isCore!:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log("Core",this.isCore);
  }

}
