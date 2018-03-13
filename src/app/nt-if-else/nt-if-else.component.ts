import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptt-nt-if-else',
  templateUrl: './nt-if-else.component.html',
  styleUrls: ['./nt-if-else.component.scss']
})
export class NtIfElseComponent implements OnInit {
  isShow: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
