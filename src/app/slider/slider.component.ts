import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() value: number;
  @Input() name: string;
  @Input() min: number;
  @Input() max: number;
  @Output() valueChange = new EventEmitter<number>();

  update(newValue: number) {
    console.log('newvalue', newValue);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
