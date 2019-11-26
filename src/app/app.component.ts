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
    if (window.innerWidth < 800) {
      this.mediaType = 'Mobile';
    } else {
      this.mediaType = 'RegularScreen';
    }
    console.log(this.mediaType);
  }
}

