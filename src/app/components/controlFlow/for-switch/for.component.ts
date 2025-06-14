import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule, CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  dayNumber: string = '';
  cityList = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];
  studList = [
    { id: 11, totalMarks: 23, name: 'Rajesh', age: 22, isActive: false },
    { id: 22, totalMarks: 40, name: 'Rajeev', age: 21, isActive: true },
    { id: 33, totalMarks: 98, name: 'Raj', age: 20, isActive: true },
    { id: 44, totalMarks: 86, name: 'Rajat', age: 23, isActive: false },
    { id: 55, totalMarks: 56, name: 'Rajkumar', age: 24, isActive: true },
  ];
}
