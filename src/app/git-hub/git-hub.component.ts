import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  pushed_at: Date;
}
@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent {
  gitHUBRepos: GitHubRepo[];
  constructor(private github: GithubService) {
    this.getData();
  }
  getData(): void {
    console.log(this.github.getData());
  }
}

