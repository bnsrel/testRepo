import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyServerService } from '../../../services/my-server.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor(private http: HttpClient, private server: MyServerService) {
    console.log(this.server);
  }

  ngOnInit() {}

  // without service
  // add() {
  //   this.http
  //     .post('http://localhost:8080/api/users/registerUser', {
  //       firstName: this.firstName,
  //       lastName: this.lastName
  //     })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   console.log(this.firstName);
  // }

  add() {
    this.server
      .addUser({
        firstName: this.firstName,
        lastName: this.lastName
      })
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    console.log(this.firstName);
  }
}
