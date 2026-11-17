import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
}
