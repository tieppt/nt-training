import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TapAComponent } from '../tap-a/tap-a.component';
import { Tapable } from '../models/tapable';

@Component({
  selector: 'ptt-tap-container',
  templateUrl: './tap-container.component.html',
  styleUrls: ['./tap-container.component.scss']
})
export class TapContainerComponent implements OnInit {
  // @ContentChildren(TapAComponent) tapChildren: QueryList<Tapable>;
  @ContentChildren(Tapable) tapChildren: QueryList<Tapable>;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    const children = this.tapChildren.toArray();
    children.forEach(element => {
      element.tap();
    });
  }

}
