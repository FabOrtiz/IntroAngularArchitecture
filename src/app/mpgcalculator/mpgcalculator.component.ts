import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpgcalculator',
  templateUrl: './mpgcalculator.component.html',
  styleUrls: ['./mpgcalculator.component.css']
})
export class MPGCalculatorComponent implements OnInit {

  miles: number = 0;
  gallons: number = 0;
  mpg: number = 0; // miles/gallons

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calculates the MPG fuel consumption
   */
  calculate(): void{
    this.mpg = this.miles / this.gallons;
  }

}
