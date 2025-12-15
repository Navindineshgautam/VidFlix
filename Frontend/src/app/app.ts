import { Component, HostListener } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Content } from './components/content/content';
import { Menu } from "./components/menu/menu";

import { WindowService } from './services/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Content, Menu]
})
export class App {
  public constructor(public windowService: WindowService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.windowService.checkScreenSize()
  }
}
