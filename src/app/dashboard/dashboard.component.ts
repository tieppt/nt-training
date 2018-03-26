import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show = true;

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
