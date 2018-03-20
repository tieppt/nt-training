import { Component, OnInit } from '@angular/core';
import { Tapable } from '../models/tapable';

@Component({
  selector: 'ptt-tap-c',
  templateUrl: './tap-c.component.html',
  styleUrls: ['./tap-c.component.scss'],
  providers: [
    {
      provide: Tapable,
      useExisting: TapCComponent
    }
  ]
})
export class TapCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tap() {
    console.log('ptt-tap-c');
  }

}
