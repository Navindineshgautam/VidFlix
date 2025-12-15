import { Component, Inject } from '@angular/core';

import { WindowService } from '../../services/window/window.service';
import { AppDatashareService } from '../../services/app-datashare/app-datashare.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  public constructor(public windowService: WindowService, private appDatashareService: AppDatashareService) {}

  public menuOnClick(): void
  {
    this.appDatashareService.menuButtonClickEvent();
  }
}
