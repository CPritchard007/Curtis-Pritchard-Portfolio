import { Component, OnInit } from '@angular/core';
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
  constructor(){this.gitHUBRepos = [];}
}

