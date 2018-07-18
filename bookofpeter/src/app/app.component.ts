import { Component, OnInit } from '@angular/core';
import { VerseService } from './verse.service';
import { Verse } from './verse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  verse: Verse;
  constructor(private verseService: VerseService){};
  
  ngOnInit(){
    this.getVerse();
  }

  //calls the service
  getVerse(){
   this.verse = this.verseService.getRandomVerse();
  }
  
}
