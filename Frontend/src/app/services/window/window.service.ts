import { Injectable, signal, WritableSignal, Signal } from '@angular/core';

import { MAX_MOBILE_WIDTH, MAX_DESKTOP_WIDTH } from '../../shared/constants/window-constants';
import { Viewports } from '../../shared/enums/window-enums';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private viewportSignal: WritableSignal<Viewports> = signal(Viewports.Desktop);

  public constructor() {
    this.checkScreenSize();
  }

  public checkScreenSize(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth <= MAX_MOBILE_WIDTH)
      this.viewportSignal.set(Viewports.Mobile);
    else if (windowWidth <= MAX_DESKTOP_WIDTH)
      this.viewportSignal.set(Viewports.Desktop);
    else
      this.viewportSignal.set(Viewports.WideScreen);
  }

  public get isMobile(): boolean {
    return this.viewportSignal() == Viewports.Mobile;
  }

  public get isDesktop(): boolean {
    return this.viewportSignal() == Viewports.Desktop;
  }

  public get isWideScreen(): boolean {
    return this.viewportSignal() == Viewports.WideScreen;
  }
}
