import {Component, Input, OnInit} from '@angular/core';
import {Shape} from "../classes/Shape";

@Component({
  selector: 'spinner-preview',
  templateUrl: './spinner-preview.component.html',
  styleUrls: ['./spinner-preview.component.css']
})
export class SpinnerPreviewComponent implements OnInit {

  @Input() shape: Shape;
  @Input() number: number;
  @Input() horizontalSpace: number;
  @Input() verticalSpace: number;

  constructor() { }

  ngOnInit() {
  }

  createArray(n) {
    return new Array(n);
  }

}
