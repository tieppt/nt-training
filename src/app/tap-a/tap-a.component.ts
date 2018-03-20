import { Component, OnInit, forwardRef } from '@angular/core';
import { Tapable } from '../models/tapable';

const provide = {
  provide: Tapable,
  useExisting: forwardRef(() => TapAComponent)
};

@Component({
  selector: 'ptt-tap-a',
  templateUrl: './tap-a.component.html',
  styleUrls: ['./tap-a.component.scss'],
  providers: [
    provide
  ]
})
export class TapAComponent implements OnInit, Tapable {

  tap() {
    console.log('ptt-tap-a');
  }
  constructor() { }

  ngOnInit() {
  }

}
