import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly featured = PROJECTS.filter((project) => project.featured);
  protected readonly others = PROJECTS.filter((project) => !project.featured);
}
