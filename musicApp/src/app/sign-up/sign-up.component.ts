
// Version 1

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { RestService} from '../services/rest.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  public user = {};
  public value = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
  private alertService: AlertService, public restService: RestService) { }
 
  ngOnInit() {
    console.log(this.user);
  }

  onSubmit() {
    console.log("am i here?")
    this.submitted = true; 
    this.restService.addUser(this.user).subscribe(val =>  console.log(val))

  }

  }


//       this.submitted = true;
// // this.restService.addUser()
//       // stop here if form is invalid
//       if (this.signUpForm.invalid) {
//           return;
//       }

//       this.loading = true;
//       this.userService.register(this.signUpForm.value)
//           .pipe(first())
//           .subscribe(
//               data => {
//                   this.alertService.success('Registration successful', true);
//                   this.router.navigate(['/login']);
//               },
//               error => {
//                   this.alertService.error(error);
//                   this.loading = false;
//               });
  

// version 2

// import { Component } from '@angular/core';
// import {Signup} from './signup';
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   title = '';
//   passwordConfirmationFailed = false;
//   passwordConfirmationTxt = '';
 
//   signup = new Signup('', '', '', '');
 
//   countries = ['india', 'canada', 'us'];
 
//   confirmPassword() {
//     if (this.signup.password === this.passwordConfirmationTxt) {
//       this.passwordConfirmationFailed = false;
//     } else {
//       this.passwordConfirmationFailed = true;
//     }
//   }
 
//   onSubmit() {
//     console.log('Name: ' + this.signup.name + ', Email: ' + this.signup.email + ', Password: ' + this.signup.password );