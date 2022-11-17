import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent {
  @Input() cardIndexToshow!: number;
  @Output() updateSettings = new EventEmitter<{index:number,enableNextButtn:boolean}>();
  @Input() enableNextBut!: boolean;
  @Input() numberOfSliderToShow!:number;

  constructor() { }
  public prev() : void{
    if(this.cardIndexToshow > 0){
      this.cardIndexToshow --;
    }
    this.enableNextBut = false
    this.updateSettings.emit({index:this.cardIndexToshow,enableNextButtn:this.enableNextBut})

   }

  public next() : void{

    if(this.cardIndexToshow < this.numberOfSliderToShow){
      this.cardIndexToshow ++;
    }
    this.enableNextBut = false
    this.updateSettings.emit({index:this.cardIndexToshow,enableNextButtn:this.enableNextBut})
  }

  public updateCardIndex(index:number) :void {
    console.log(index)
    this.cardIndexToshow = index;
    this.updateSettings.emit({index:this.cardIndexToshow,enableNextButtn:this.enableNextBut})

  }


}
