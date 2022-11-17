import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css']
})
export class Card5Component implements OnInit {
  @Output() checkBoxChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  change(values:any) {
    console.log(values.checked)
    this.checkBoxChangeEvent.emit(values.checked)
  }
}
