import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
