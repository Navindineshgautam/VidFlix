import { Component, Inject } from '@angular/core';

import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  public constructor(public windowService: WindowService) {}
}
