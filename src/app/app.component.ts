import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'custom-crousel';

  public cardsArrayToShow:number[] =[] ;
  public cardIndexToshow:number = 0;
  public enableNextBut:boolean = false;
  public core!:number ;
  public numberOfSliderToShow = Math.floor(Math.random() * 6) + 2; //choose a random number b/w 2 & 6

  constructor() { }

  ngOnInit(): void {
    this.getRandomNumbers();
  }

  private getRandomNumbers():void {
    while(this.cardsArrayToShow.length <= this.numberOfSliderToShow) {
      let randomNum = Math.floor(Math.random() * 6) + 1;
      if(!this.cardsArrayToShow.includes(randomNum)){
        this.cardsArrayToShow.push(randomNum);
      }
    }
    this.cardsArrayToShow.sort();
    this.cardIndexToshow = 0;
    this.core = this.cardsArrayToShow[Math.round((this.cardsArrayToShow.length - 1) / 2)];
    console.log(this.cardsArrayToShow)
  }

  public onCheckBoxChange(data:boolean):void {
    this.enableNextBut = data;
  }

  updateSettings(settings:any) :void{
    this.cardIndexToshow = settings.index;
    this.enableNextBut = settings.enableNextBut;
  }
}
