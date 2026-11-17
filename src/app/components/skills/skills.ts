import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
