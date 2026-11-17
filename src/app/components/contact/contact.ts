import { Component, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(this.profile.email);
      } else {
        const field = document.createElement('textarea');
        field.value = this.profile.email;
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        document.execCommand('copy');
        document.body.removeChild(field);
      }
      this.flashCopied();
    } catch {
      /* le copier-coller n'est pas disponible : le lien mailto reste utilisable */
    }
  }

  private flashCopied(): void {
    this.copied.set(true);
    window.setTimeout(() => this.copied.set(false), 2000);
  }
}
