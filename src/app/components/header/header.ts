import {
  Component,
  DOCUMENT,
  OnDestroy,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header implements OnDestroy {
  private readonly document = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly navOpen = signal(false);
  protected readonly active = signal('');

  private observer?: IntersectionObserver;
  private readonly onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.navOpen.set(false);
  };
  private readonly onDocumentClick = (event: MouseEvent) => {
    if (!this.navOpen()) return;
    const target = event.target as HTMLElement;
    if (target.closest('.site-header')) return;
    this.navOpen.set(false);
  };

  constructor() {
    afterNextRender(() => {
      this.setupActiveTracking();
      this.document.addEventListener('keydown', this.onKeydown);
      this.document.addEventListener('click', this.onDocumentClick);
    });
  }

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }

  protected closeNav(): void {
    this.navOpen.set(false);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.document.removeEventListener('keydown', this.onKeydown);
    this.document.removeEventListener('click', this.onDocumentClick);
  }

  private setupActiveTracking(): void {
    if (!('IntersectionObserver' in window)) return;

    const ids = new Set(this.links.map((link) => link.href.slice(1)));
    const sections = Array.from(
      this.document.querySelectorAll('main section[id]'),
    ).filter((section) => ids.has(section.id));

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
