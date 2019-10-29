import { Component, OnInit } from '@angular/core';
interface Language {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: Language[];
  constructor() { }

  ngOnInit() {
    this.languages = [{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    },{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    },{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    },{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    },{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    },{
      name: 'JavaScript',
      icon: '../assets/language-icons/javascript-original.svg'
    }, {
      name: 'Java',
      icon: '../assets/language-icons/java-original.svg'
    }, {
      name: 'php',
      icon: '../assets/language-icons/php-original.svg'
    }, {
      name: 'HTML5',
      icon: '../assets/language-icons/html5-original.svg'
    }, {
      name: 'Android',
      icon: '../assets/language-icons/android-original.svg'
    }, {
      name: 'Angular',
      icon: '../assets/language-icons/angular-original.svg'
    }, {
      name: 'CSharp',
      icon: '../assets/language-icons/csharp-original.svg'
    }];
  }

}
