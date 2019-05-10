import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Observable, fromEvent} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.scss']
})
export class SearchMusicComponent implements OnInit {
  results: Object[] = [];
  inputObs: Observable<any>;
  inputElement: any;
  displayedColumns: string[] = ['title', 'artist', 'preview'];
  pageSize = 25;
  length: number;
  searchTerm = '';
  apiIndex = 0;
  pageIndex = 0;
  indexItterator: Object [] = [];
  nextButton = document.getElementById("nextButton");
  prevButton = document.getElementById("prevButton");
constructor(private musicService: MusicService) {}
addIndex(pageIndex) {
  if (this.pageIndex < ((this.length / 25) - 1)) {
    this.indexItterator.push({pageIndex});
    this.apiIndex = this.indexItterator.length * 25;
    this.pageIndex = pageIndex + 1;
    pageIndex = this.pageIndex;
  }
  else {
  }
  this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
  });
}
subIndex(pageIndex) {
  if (pageIndex > 0) {
    this.indexItterator.pop();
    this.apiIndex = this.indexItterator.length * 25;
    this.pageIndex = this.pageIndex - 1;
      }
      else {
      }
  this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
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
    this.searchTerm = searchTerm;
  });
  });
}
}
