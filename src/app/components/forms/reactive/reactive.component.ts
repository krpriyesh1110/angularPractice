import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl(''),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    isAcceptTerms: new FormControl(false),
  });

  formValue: any;

  onSubmit() {
    this.formValue = this.studentForm.value;
  }
  resetForm() {
    this.studentForm.reset();
  }
}
