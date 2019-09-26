import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { user } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginGroup = new FormGroup({
      username : new FormControl(''),
      password :  new FormControl('')
    });
  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit() {
    let loginPage = true;
  }
  login()
  {
    let username = this.loginGroup.value.username;
    let password = this.loginGroup.value.password;
    let islogged =  this.authentication.LoginValidation(username, password);
    if ( islogged ){
      this.router.navigate(['/home']);
    }
    else{ alert('Invalid credentials');}
    
  }
  }

