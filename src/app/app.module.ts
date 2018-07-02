import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerPreviewComponent } from './spinner-preview/spinner-preview.component';
import { ShapePreviewComponent } from './shape-preview/shape-preview.component';

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SpinnerPreviewComponent,
    ShapePreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
