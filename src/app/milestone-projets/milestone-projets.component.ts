import { Component, OnInit } from '@angular/core';
export interface MilestoneProject {
  name: string;
  image: string;
  description: string;
  language: string;
}
@Component({
  selector: 'app-milestone-projects',
  templateUrl: './milestone-projets.component.html',
  styleUrls: ['./milestone-projets.component.scss']
})
export class MilestoneProjetsComponent implements OnInit {
  milestoneProjects: MilestoneProject[]
  constructor() { }

  ngOnInit() {
    this.milestoneProjects = [
      {name: 'TypeKnights', description: 'This is the TypeKnight Description', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'},
      {name: 'Portfolio', description: 'This is the Portfolio Description', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'}
    ];
  }

}
