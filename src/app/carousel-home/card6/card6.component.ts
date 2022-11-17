import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
