import { Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
})
export class Education {
  protected readonly education = EDUCATION;
}
