import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css',
})
export class IfelseComponent {
  div1Visible: boolean = true;
  div2Visible: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  hideBox() {
    this.div1Visible = false;
  }
  showBox() {
    this.div1Visible = true;
  }
  toggle() {
    this.div2Visible = !this.div2Visible;
  }
}
