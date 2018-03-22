import { Component } from '@angular/core';

@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  show = true;

  toggle() {
    this.show = !this.show;
  }
}
