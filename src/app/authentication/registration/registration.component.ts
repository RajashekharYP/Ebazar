import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    repassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
    role: new FormControl('user', [Validators.required])

});

// profileForm = new FormGroup({
//   name: new FormControl(''),
//   password:new FormControl(''),
//   email:new FormControl(''),
// });
constructor(private router: Router,private fb: FormBuilder, private authenticationService : AuthenticationService) { }

  ngOnInit( ) {
  }
  getUsernameErrorMessage() {
    return this.RegistrationForm.get('name').hasError('required') ? 'you must enter a value ' : ''; }
  getEmailErrorMessage() {
    return this.RegistrationForm.get('email').hasError('required') ? 'You must enter a value' :
    this.RegistrationForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordErrorMessage() {
    return this.RegistrationForm.get('password').hasError('required') ? 'you must enter a value' :
    this.RegistrationForm.get('password').value.length < 8 ? 'length should be greater than 8 ' :
    this.RegistrationForm.get('password').hasError('pattern') ? '' : '';
  }
  // getRePasswordErrorMessage() {
  //   return this.RegistrationForm.get('repassword').hasError('required') ? 'you must enter a value' :
  //   this.RegistrationForm.get('repassword').value.length < 8 ? 'length should be greater than 8 ' :
  //   this.RegistrationForm.get('password') !== this.RegistrationForm.get('repassword') ? 'Password and Re-type password Should Be Same' :
  //   this.RegistrationForm.get('repassword').hasError('pattern') ? '' : '';
  // } 
  getRoleErrorMessage(){
    return this.RegistrationForm.get('role').hasError('required')?'':'';
  }


  register(){
   //console.log(this.RegistrationForm.value);
   this.authenticationService.register(this.RegistrationForm.value);
   alert('Thanks For Signing Up With Us...!');
   this.router.navigate(['/home']);
  }
}
