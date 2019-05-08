import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Observable, fromEvent} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.scss']
})
export class SearchMusicComponent implements OnInit {
  results: Object[] = [];
  inputObs: Observable<any>;
  indexObs: Observable<any>;
  inputElement: any;
  displayedColumns: string[] = ['title', 'artist', 'preview'];
  pageSize = 25;
  length = 0;
  searchTerm = '';

constructor(private musicService: MusicService) {}
newIndex(event) {
  this.musicService.getResults(this.searchTerm, event.pageIndex).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
  });
}


ngOnInit() {
  this.inputElement = document.getElementById("searchTerm");
  this.inputObs = fromEvent(this.inputElement, 'input').pipe(map(e => e['target'].value),
  filter (text => text.length > 3),
  debounceTime(400),
  distinctUntilChanged());

  this.inputObs.subscribe(searchTerm => {
  this.musicService.getResults(searchTerm, 0).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
    return searchTerm;
  });

  // this.indexObs.subscribe(pageEvent =>{
  //   this.musicService.getResults(this.searchTerm, this.pageIndex).subscribe(res => {
  //     this.pageIndex = pageEvent['index'];
  //     this.pageIndex = this.pageIndex * 25;
  //     this.results = res['data'];
  //     this.length = res['total'];
  // });
    // });
  });
  }
}
