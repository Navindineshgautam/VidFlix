import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppDatashareService {
  private menuButtonClickSubject = new Subject<void>();

  public get menuButtonClickObservable(): Observable<void>
  {
    return this.menuButtonClickSubject.asObservable();
  }

  public menuButtonClickEvent(): void
  {
    this.menuButtonClickSubject.next();
  }
}
