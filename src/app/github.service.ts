import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GithubItem} from './git-hub/githubItems';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  gitRepos: GithubItem[];
  constructor(private http: HttpClient) {}
  callback = 'callForRepository';
  url = 'https://api.github.com/users/Cpritchard007/repos';
  getData(): GithubItem [] {
    this.gitRepos = [];

    this.http.jsonp(this.url, 'callback').subscribe( e => {
      e.data.forEach(item => {
        console.log(item);
        this.gitRepos.push({
          name: item.name,
          description: item.description,
          url: item.url
        });
      });
    });
  }
}
