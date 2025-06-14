import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isShowBox1: boolean = true;
  isDiv2Visible: boolean = true;
  num1 = '';
  num2 = '';
  isActive: boolean = true;
  selectedCountry: string = '';
  cityList = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];
  studList = [
    { id: 11, name: 'Rajesh', age: 22, isActive: false },
    { id: 22, name: 'Rajeev', age: 21, isActive: true },
    { id: 33, name: 'Raj', age: 20, isActive: true },
    { id: 44, name: 'Rajat', age: 23, isActive: false },
    { id: 55, name: 'Rajkumar', age: 24, isActive: true },
  ];

  constructor(private router: Router) {}

  hideBox() {
    this.isShowBox1 = false;
  }
  showBox() {
    this.isShowBox1 = true;
  }
  toggle() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  goToAttribute() {
    this.router.navigateByUrl('/attribute-dir');
  }
}
