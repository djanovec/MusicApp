import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { MusicService } from '../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';
// import {CollectionViewer, DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  result: any = [];
  resultData: any = {
    thead: ['Title', 'Artist', 'Preview'],
    displayedColumns: ['data.title', 'data.artist.name', 'data.preview']
  };
constructor(private results: MusicService) {}
  getResult() {
    this.results.getResults().subscribe(response => this.result = response['data']);
    this.results.getResults().subscribe(response => console.log(response));
}
  ngOnInit() {
  }
}


// MY WORKING CODE TRYING A DIFFERENT APPROACH TO GET THINGS TO WORK 
// REFERENCE MATERIAL FROM HERE: https://codingthesmartway.com/angular-material-part-4-data-table/


// export class ResultsComponent implements OnInit {
//   result: HttpClient;
//   dataSource = new MusicService(this.result);
//   displayedColumns = ['name', 'email', 'phone', 'company'];
//   constructor(private musicService: MusicService) { }
  
//   ngOnInit() {
//   }
// }

// export class UserDataSource extends DataSource<any>{
//   result: any = [];
//   constructor(private musicService: MusicService) {
//     super();
//   }
//   connect(): Observable<getResults[]> {
//     return this.musicService.getResults();
//   }
//   disconnect() {}
// }

