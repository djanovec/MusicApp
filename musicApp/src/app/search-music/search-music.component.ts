import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.scss']
})
export class SearchMusicComponent implements OnInit {

  constructor(private musicService: MusicService) { 
    
      
    }
  }

  ngOnInit() {
  
    
  }

}

//Observable