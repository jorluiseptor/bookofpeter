import { Injectable } from '@angular/core';
import { Verse } from './verse';


@Injectable({
  providedIn: 'root'
})
export class VerseService {
  
  //temporary
  //TODO replace with web service
  verses: Verse[] = [
    {text: `I accidentally said "pastryarchy" instead of "patriarchy" and now I have a vision for a better world.`},
    {text: `To children of the Earth: The good news is that when you're a grownup, you can eat ice cream for dinner. The bad news is that it's because you're depressed.`, chapterNum:7,verseNum:57},
    {text: `Sugar is cheap. Search for an Avocado daddy.`, chapterNum:9, verseNum:54},
    {text: `I tried saving a cat in a tree but he wouldn't accept Jesus.`, chapterNum:10,verseNum:25},
    {text: `Instead of the Founding Fathers, I prefer to call them the Deciding Daddies.`},
    {text: `Apparently, there are different Christian sects that believe that the foreskin of Christ is holy. As I was reading the article it took me a while to realize we weren’t talking about the same Jesus.`},
    {text: `Going to need you to finish your story real quick so I can tell you how the same thing happened to me, but its more interesting because I'm in it.`},
  ];

  //returns a random verse
  getRandomVerse(): Verse{
    let randomVerse = this.verses[Math.floor(Math.random() * this.verses.length)]
    return randomVerse;
  }

}
