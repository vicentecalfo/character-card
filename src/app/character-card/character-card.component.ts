import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

declare var Vibrant: any;

@Component({
  selector: 'ez-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnChanges {

  @Input() serie: string;
  @Input() name: string;
  @Input() character: string;
  @Input() image: string;
  @Input() release: string;

  primaryColor: string;
  secondaryColor: string;
  accentColor: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    Vibrant.from(this.image).getPalette((error, palette) => {
      this.primaryColor = palette.LightVibrant.hex;
      this.secondaryColor = palette.Vibrant.hex;
      this.accentColor = palette.DarkVibrant.hex;
    });

  }

}
