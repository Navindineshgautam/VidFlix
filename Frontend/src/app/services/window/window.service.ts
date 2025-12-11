import { Injectable, signal, WritableSignal, Signal } from '@angular/core';

import { MAX_MOBILE_WIDTH } from '../../constants/window-constants';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private isMobileSignal: WritableSignal<boolean> = signal(false);
  
  public readonly isMobile: Signal<boolean> = this.isMobileSignal.asReadonly();

  public checkScreenSize(): void {
    const mobileStatus = window.innerWidth < MAX_MOBILE_WIDTH;
    this.isMobileSignal.set(mobileStatus); 
  }

  public constructor() {
    this.checkScreenSize();
  }
}
