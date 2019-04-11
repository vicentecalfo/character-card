import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private sub: any;
  character: any;
  characters: any[];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get('https://www.amiiboapi.com/api/amiibo/').subscribe(
      (characters: any) => {
        this.characters = characters.amiibo;
      }
    );
  }

  chooseCharacter(event) {
    this.character = this.characters[event.target.value];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
