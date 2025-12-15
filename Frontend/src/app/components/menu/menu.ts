import { Component, OnInit } from '@angular/core';

import { AppDatashareService } from '../../services/app-datashare/app-datashare.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private menuButtonSubscription!: Subscription;
  private menuOpen: boolean = false;

  public constructor(private appDatashareService: AppDatashareService) {}

  ngOnInit(): void {
    this.appDatashareService.menuButtonClickObservable.subscribe(() => {
      this.menuOpen = !this.menuOpen;
    });
  }

  public get isMenuOpen(): boolean {
    return this.menuOpen;
  }
}
