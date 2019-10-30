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
     header: 'Hello! How are you?',
     message: 'Hello, Im Curtis Pritchard, and I am here to show you why I am exactly what you are looking for as your next employee.' +
       'I strive as an employee of where ever I am, to be the best I can be (whether it customer service, or assuring your application' +
       'is done professionally.'
   }];
  }

  ngOnInit() {
  }

}
