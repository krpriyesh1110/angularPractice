import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css',
})
export class AttributeDirComponent {
  cityList = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];
  studList = [
    { id: 11, totalMarks: 23, name: 'Rajesh', age: 22, isActive: false },
    { id: 22, totalMarks: 40, name: 'Rajeev', age: 21, isActive: true },
    { id: 33, totalMarks: 98, name: 'Raj', age: 20, isActive: true },
    { id: 44, totalMarks: 86, name: 'Rajat', age: 23, isActive: false },
    { id: 55, totalMarks: 56, name: 'Rajkumar', age: 24, isActive: true },
  ];

  div1BgColor: string = 'bg-info';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }
  addBlueClass() {
    this.div1BgColor = 'bg-primary';
  }
  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
