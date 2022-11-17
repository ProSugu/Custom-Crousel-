import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
