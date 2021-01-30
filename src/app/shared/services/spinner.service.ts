import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loadingState$: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  constructor() {}

  public show(): void {
    this.loadingState$.next(true);
  }
  public hide(): void {
    this.loadingState$.next(false);
  }
  public loading$(): Observable<boolean> {
    return this.loadingState$.asObservable();
  }
}
