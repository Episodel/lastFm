import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlbumsStorage } from '../../core/localStorege/routes/album.storeg';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private counterLikeState$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(AlbumsStorage.get().length);

  private searchAlbumsState$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('');
  constructor() {}

  public setCounterLike(number: number): void {
    this.counterLikeState$.next(number);
  }
  public get getCounterLike$(): Observable<number> {
    return this.counterLikeState$.asObservable();
  }

  public setSearch(value: string): void {
    this.searchAlbumsState$.next(value);
  }

  public getSearch$(): Observable<string> {
    return this.searchAlbumsState$.asObservable();
  }
}
