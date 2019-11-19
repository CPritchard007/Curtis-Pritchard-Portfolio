import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
      // @ts-ignore
      e.data.forEach(item => {
        this.gitRepos.push({
          name: item.name,
          description: item.description,
          url: item.url,
          last_commit: new Date(item.updated_at)
        });
      });
    });
    return this.gitRepos;
  }

}
