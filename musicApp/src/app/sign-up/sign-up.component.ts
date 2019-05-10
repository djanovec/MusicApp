import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
