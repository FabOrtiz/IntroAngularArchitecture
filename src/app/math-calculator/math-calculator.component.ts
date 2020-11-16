/*
    Name: Fabio Ortiz
    Title: Ex 4 - MathCalculator
    Date: 11/16/2020
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-calculator',
  templateUrl: './math-calculator.component.html',
  styleUrls: ['./math-calculator.component.css']
})
export class MathCalculatorComponent implements OnInit {

  answer: number = 0;
  calculatorValue: number = null;


  constructor() { }

  ngOnInit(): void {
  }


  add(): void {
    this.answer += +this.calculatorValue;
    this.calculatorValue = null;
  }

  subtract(): void {
    this.answer -= this.calculatorValue; 
    this.calculatorValue = null;
  }

  multiply(): void {
    this.answer *= this.calculatorValue;
    this.calculatorValue = null;
  }

  divide(): void {
    this.answer /= this.calculatorValue;
    this.calculatorValue = null;
  }

}
