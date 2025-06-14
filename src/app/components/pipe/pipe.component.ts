import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    NaPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  text: string = 'This is a demo session';
  date: Date = new Date();

  student: any = {
    name: 'Priyesh',
    age: 28,
    studId: 232,
    city: '',
  };

  currentTime: Observable<Date> = new Observable<Date>();

  constructor() {
    setInterval(() => {
      this.currentTime = new Observable<Date>((observer) => {
        observer.next(new Date());
      });
    }, 1000);
  }
}
