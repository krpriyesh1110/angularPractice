import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  usersList: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.usersList = res;
      }, error=>{
        debugger
      });
  }
}
