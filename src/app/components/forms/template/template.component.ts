import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isAcceptTerms: false,
  };

  formValue: any;
  isSubmited: boolean = false;

  onSubmit() {
    this.formValue = this.studentObj;
    this.isSubmited = true;
  }

  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zip: '',
      isAcceptTerms: false,
    };
    this.isSubmited = false;
  }
}
