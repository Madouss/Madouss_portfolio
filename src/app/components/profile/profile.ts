import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
})
export class Profile {
  protected readonly profile = PROFILE;
}
