import { Component, OnInit } from '@angular/core';
interface Message {
  header?: string;
  message: string;
  image?: string;
}
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
 messages: Message[];
  constructor() {
   this.messages = [{
     header: 'Mobile Applications Developer',
     message: 'I have been attending a three year course in mobile applications development (attending third year).' +
       ' I have learned how to develop for many platforms, including IOS, Web, and Android'
   }, {
     message: 'my work can be found on GitHub under the username Cpritchard007'
   }, {
     message: 'Resume will be provided upon request.'
   }];
  }

  ngOnInit() {
  }

}
