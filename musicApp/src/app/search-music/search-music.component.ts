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
  length = 100;
  pageEvent: PageEvent;
  pageIndex = 0;
constructor(private musicService: MusicService) {

  function newIndex() {
    if(this.pageEvent){
      this.pageIndex = (this.pageIndex * 25);
      this.musicService.getResults(this.searchTerm, this.pageIndex).subscribe(res => {
        this.results = res['data'];
        this.length = res['total'];
      })
    }
  }
}

ngOnInit() {
  this.inputElement = document.getElementById("searchTerm");
  this.inputObs = fromEvent(this.inputElement, 'input').pipe(map(e => e['target'].value),
  filter (text => text.length > 3),
  debounceTime(400),
  distinctUntilChanged());

  this.inputObs.subscribe(searchTerm => {
  this.musicService.getResults(searchTerm, this.pageIndex).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
  });
  });
  }
}
