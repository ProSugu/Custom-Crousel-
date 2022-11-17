import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
