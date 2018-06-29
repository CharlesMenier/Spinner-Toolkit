import { Component } from '@angular/core';
import {ColorPickerService} from "ngx-color-picker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Spinner Toolkit';

  constructor(private cpService: ColorPickerService) {}
}
