import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MusicService } from '../services/music.service';
import { MatPaginator, MatTableDataSource} from '@angular/material';

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


