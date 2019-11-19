import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  mediaType: string;
  ngOnInit(): void {
    if(window.innerWidth < 700) {
      this.mediaType = 'Mobile';
    } else if (window.innerWidth < 1000) {
      this.mediaType = 'smallScreen';
    } else {
      this.mediaType = 'regularScreen';
    }
    console.log(this.mediaType + ", " + window.innerWidth);
  }
}

