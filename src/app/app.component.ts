import { Component } from '@angular/core';
import {ColorPickerService} from "ngx-color-picker";
import {Shape} from "./classes/Shape";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Spinner Toolkit';
  shape : Shape = {
    width: 10,
    height: 10,
    color: 'blue',
    rotation: 0,
    borderRadius: 0,
  };

  number = 10;
  widthSpace = 0;
  heightSpace = 0;

  constructor(private cpService: ColorPickerService) {}
}
