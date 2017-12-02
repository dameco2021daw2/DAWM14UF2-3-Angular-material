import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { M01_SumaComponent } from './M01_suma.component';
import { M02_IteradorComponent } from './M02_iterador.component';



@NgModule({
  declarations: [
    M01_SumaComponent,
    M02_IteradorComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [M01_SumaComponent]
})
export class AppModule { }
