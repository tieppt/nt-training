import { Component, OnInit } from '@angular/core';
import { Tapable } from '../models/tapable';

@Component({
  selector: 'ptt-tap-b',
  templateUrl: './tap-b.component.html',
  styleUrls: ['./tap-b.component.scss'],
  providers: [
    {
      provide: Tapable,
      useExisting: TapBComponent
    }
  ]
})
export class TapBComponent implements OnInit, Tapable {

  tap() {
    console.log('ptt-tap-b');
  }
  constructor() { }

  ngOnInit() {
  }

}
