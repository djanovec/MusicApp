import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { MusicService } from '../services/music.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatTableDataSource} from '@angular/material';
// import {CollectionViewer, DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  results: Object[] = [];
  displayedColumns: string[] = ['title', 'artist', 'preview']
  dataSource = new MatTableDataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // resultData: any = {
  //   thead: ['Title', 'Artist', 'Preview'],
  //   displayedColumns: ['data.title', 'data.artist.name', 'data.preview']
  // };


constructor(private results1: MusicService) {}
  getResult() {
    this.results1.getResults('searchTerm').subscribe(response => this.results = response['data']);
    this.results1.getResults('searchTerm').subscribe(response => console.log(response));
    console.log(this.results);
    
}


  ngOnInit() {
    this.dataSource.paginator = this.paginator
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

