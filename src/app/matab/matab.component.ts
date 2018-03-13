import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptt-matab',
  templateUrl: './matab.component.html',
  styles: []
})
export class MatabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectedTabChange(data) {
    console.log(data);
  }

}
