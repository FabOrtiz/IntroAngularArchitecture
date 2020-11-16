import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//When we want to use ngModel for two way binding with input controls, we import FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { MPGCalculatorComponent } from './mpgcalculator/mpgcalculator.component';
import { Comp3Component } from './comp3/comp3.component';
import { MathCalculatorComponent } from './math-calculator/math-calculator.component';

//Don't forget module imports must be added to declaration

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    MPGCalculatorComponent,
    Comp3Component,
    MathCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
