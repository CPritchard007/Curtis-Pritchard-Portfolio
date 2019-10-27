import {Component, OnInit} from '@angular/core';
export interface MenuItems {
  name: string;
  icon?: any;
  ref: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItemsList: MenuItems[];
  constructor() {
    this.menuItemsList = [ {
      name: 'About',
      icon: 'face',
      ref: '#About'
    }, {
      name: 'Interests',
      icon: 'color_lens',
      ref: '#interests'
    }, {
      name: 'Languages',
      icon: 'code',
      ref: '#languages'
    }, {
      name: 'GitHUB',
      icon: '',
      ref: '#github'
    }, {
       name: 'Contact Me',
        ref: '#contact',
       icon: 'phone'
      }];
  }

  ngOnInit() {
  }

}
