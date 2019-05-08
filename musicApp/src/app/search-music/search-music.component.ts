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
  length = 1;
  searchTerm = '';
  apiIndex = 0;
  pageIndex = 1;
  indexItterator: number;
  nextButton = document.getElementById("nextButton");
  prevButton = document.getElementById("prevButton");
constructor(private musicService: MusicService) {}
addIndex(pageIndex) {
  if (pageIndex < this.length) {
    this.indexItterator = pageIndex + 1;
    this.apiIndex = this.indexItterator * 25;
    this.indexItterator = pageIndex;
    console.log(this.apiIndex);
  }
  else {
    console.log("didn't work");
  }
  this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
    console.log(this.searchTerm);
    console.log(this.apiIndex);
  });
}
subIndex(pageIndex) {
  if (pageIndex > 0) {
        pageIndex = pageIndex - 1;
        this.apiIndex = pageIndex * 25;
        console.log(this.apiIndex);
      }
      else {
        console.log("didn't work");
      }
  this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
    this.results = res['data'];
    this.length = res['total'];
    console.log(this.searchTerm);
    console.log(this.apiIndex);
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

// Work in progress 
// addIndex(pageIndex) {
//   if (this.pageIndex < this.length) {
//     this.indexItterator.push({pageIndex});
//     console.log(this.apiIndex);
//   }
//   else {
//     console.log("didn't work");
//     console.log(this.pageIndex);
//     console.log(this.length);
//   }
//   this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
//     this.results = res['data'];
//     this.length = res['total'];
//     console.log(this.searchTerm);
//     console.log(this.apiIndex);
//   });
// }
// subIndex(pageIndex) {
//   if (this.pageIndex > 0) {
//     this.indexItterator.pop();
//     console.log(this.apiIndex);
//       }
//       else {
//         console.log("didn't work");
//         console.log(this.pageIndex);
//         console.log(this.length);
//       }
//   this.musicService.getResults(this.searchTerm, this.apiIndex).subscribe(res => {
//     this.results = res['data'];
//     this.length = res['total'];
//     console.log(this.searchTerm);
//     console.log(this.apiIndex);
//   });
// }