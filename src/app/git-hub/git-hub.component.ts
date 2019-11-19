import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {GithubItem} from './githubItems';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent {
  private gitHUBRepos: GithubItem[];

  constructor(private github: GithubService) {
    this.gitHUBRepos = this.github.getData();
    console.log(this.gitHUBRepos);
  }
  getSortedData(): GithubItem[] {

    return this.gitHUBRepos.sort((a, b) => b.last_commit.getDate() - a.last_commit.getDate());
  }
}


