import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class UserListComponent implements OnInit {

  users:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }


  delete(id) {
    this.rest.deleteUser(id)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

}