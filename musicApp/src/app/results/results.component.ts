import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MusicService } from '../services/music.service';
import { MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  result: Object[] = [];
  displayedColumns: string[] = ['title', 'artist', 'preview']
  dataSource = new MatTableDataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private results: MusicService) {}
  getResult() {
    this.results.getResults().subscribe(response => this.result = response['data']);
    this.results.getResults().subscribe(response => console.log(response));
    console.log(this.result);
    
}

  ngOnInit() {
    this.dataSource.paginator = this.paginator
  }
}


