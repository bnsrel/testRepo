import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServerService {
  baseUrl = 'http://localhost:8080/api/users/';
  constructor(private http: HttpClient) {}

  addUser(data) {
    return this.http.post(this.baseUrl + 'registerUser', data);
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + 'getAllUsers');
  }

  login(userName, password) {
    return this.http.post(this.baseUrl + 'login', {
      userName: userName,
      password: password
    });
  }
}
