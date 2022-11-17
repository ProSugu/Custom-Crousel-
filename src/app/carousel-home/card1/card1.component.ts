import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
