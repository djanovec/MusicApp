
// Version 1

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
//confident the form group items are corrector
export class SignUpComponent implements OnInit {
   signUpForm = new FormGroup({
    'firstName': new FormControl(),
    'lastName': new FormControl(),
    'email': new FormControl(),
    'password': new FormControl(),
  })
  
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  
  hero: any;

  constructor(private router: Router) {    }

  login() {
    // event.preventDefault();
    // if(this.signUpForm.valid){
      // sign-up function
    }
    // console.warn(this.signUpForm.value);
    // if(this.email){
    //   localStorage.setItem("user", this.email);
    //   localStorage.setItem("user", this )
    //   this.router.navigate(['/user'+this.email]);
    //   console.log("Huh?")
    // }
  

  // export class SignUpComponent implements OnInit {
  //   signUpForm: FormGroup;
  //   loading = false;
  //   submitted = false;
  //   constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
  //   private alertService: AlertService) { }



  ngOnInit(): void {
    // this.signUpForm = new FormGroup({
    //   'firstName': new FormControl(this.hero.firstName, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   'alterEgo': new FormControl(this.hero.alterEgo),
    //   'power': new FormControl(this.hero.power, Validators.required)
    // });

  }

  get name() { return this.signUpForm.get('firsName'); }

  get power() { return this.signUpForm.get('power'); }

}
  
  //     this.signUpForm = this.formBuilder.group({
  //       firstName: ['', Validators.required],
  //       lastName: ['', Validators.required],
  //       email: ['', Validators.required],
  //       password: ['', [Validators.required, Validators.minLength(6)]]
  //     });
  // }
  // // convenience getter for easy access to form fields
  // get f() { return this.signUpForm.controls; }

//   onSubmit() {
//       this.submitted = true;

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
//   }
// }

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
//   }

// }