import { Component, OnInit } from '@angular/core';
interface Message {
  header: string;
  message: string;
  image?:string;
}
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
 messages: Message[]
  constructor() {
   this.messages = [{
     header: "Curtis Pritchard",
     message: "message"
   }];
  }

  ngOnInit() {
  }

}
