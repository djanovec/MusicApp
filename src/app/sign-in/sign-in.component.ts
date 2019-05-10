import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestService} from '../services/rest.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted = false;
  public loginUser = {};
  public value = '';
  signInForm: FormGroup;
  username: string;
  password: string;
  email: string;

  constructor(private router: Router, private restService: RestService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginUser);
    this.submitted = true;
    this.restService.userLogin(this.loginUser).subscribe(res => {;
      if(res["message"]){
        console.log("this works")
      }
      else{
        console.log("error returned")
      }
    })

    }
    // console.log(this.loginUser);

  
  // login(): void {
  //   if (this.email == req.body.email && this.password == req.body.password) {
  //     this.router.navigate(["user"]);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // }
  }
