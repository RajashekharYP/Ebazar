import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { user } from '../user';
import { registeredUsers } from '../usersList';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isLoggedInSubject = new Subject<boolean>();
  loggeduser: boolean = false;
  userlist = registeredUsers;
  register(data) {

    const users: user[] = [
      {
        role: data.role,
        name: data.name,
        email: data.email,
        password: data.password
      }];
    // console.log(users);
  }

  LoginValidation(username: string, password: string) {
    if (username !== '') {
      //console.log("in service");    
      let temp = this.userlist.find(c => c.name == username && c.password == password);
      //console.log("temp "+temp);
      if (temp) {
        this.loggeduser = true;
        this.isLoggedInSubject.next(this.loggeduser);
        return true;
      }
      else {
        this.loggeduser = false;
        this.isLoggedInSubject.next(this.loggeduser);
        return false;
      }
    }
  }
  getloggeduser() {
    this.isLoggedInSubject.next(this.loggeduser);
  }
  logOut() {
    this.loggeduser = false;
    this.isLoggedInSubject.next(this.loggeduser);
  }
}
