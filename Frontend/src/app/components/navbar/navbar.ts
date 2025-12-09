import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private isDesktop: boolean = false;

  private checkScreenSize(): void {
    this.isDesktop = window.innerWidth >= 767;
  }

  public constructor() {
    this.checkScreenSize()
  }

  public getIsDesktop(): boolean {
    return this.isDesktop;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.checkScreenSize()
  }
}
