import { Component, HostListener } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Content } from './components/content/content';

import { WindowService } from './services/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Content]
})
export class App {
  public constructor(private windowService: WindowService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.windowService.checkScreenSize()
  }
}
