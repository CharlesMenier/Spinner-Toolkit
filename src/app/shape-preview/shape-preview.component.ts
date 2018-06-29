import {Component, Input, OnInit} from '@angular/core';
import {Shape} from "../classes/Shape";

@Component({
  selector: 'shape-preview',
  templateUrl: './shape-preview.component.html',
  styleUrls: ['./shape-preview.component.css']
})
export class ShapePreviewComponent implements OnInit {

  @Input() shape: Shape;

  constructor() { }

  ngOnInit() {
  }

}
