import { Component, OnInit } from '@angular/core';
import {Shape} from "../classes/Shape";

@Component({
  selector: 'shape-editor',
  templateUrl: './shape-editor.component.html',
  styleUrls: ['./shape-editor.component.css']
})
export class ShapeEditorComponent implements OnInit {

  shape: Shape = {
    width: 5,
    height: 5,
    color: 'red',
    rotation: 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
