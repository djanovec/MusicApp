import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestService} from '../services/rest.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private restService: RestService) { }
  email: string;
  password: string;
  loginUser: {};
  signInForm: FormGroup;
  ngOnInit() {
  }

  OnSubmit(){
    this.restService.userLogin(this.loginUser).subscribe
    console.log(this.loginUser);

  }
  // login(): void {
  //   if (this.email == req.body.email && this.password == req.body.password) {
  //     this.router.navigate(["user"]);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // }
}
