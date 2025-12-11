import { Component, HostListener } from '@angular/core';

import { MAX_MOBILE_WIDTH } from '../../constants/window-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private isMobile: boolean = false;

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < MAX_MOBILE_WIDTH;
  }

  public constructor() {
    this.checkScreenSize()
  }

  public getIsMobile(): boolean {
    return this.isMobile;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.checkScreenSize()
  }
}
