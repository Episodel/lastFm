import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IAlbum } from '../../../shared/components/interface/album.interface';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { AlbumsStorage } from '../../localStorege/routes/album.storeg';

@Injectable({
  providedIn: 'root',
})
export class AlbumsApiService {
  constructor(private http: HttpClient, private spinnerS: SpinnerService) {}
  private apiKey = '22e5dcb7293a23da484afeacce80c247';

  public getAlbums(genre: string): Observable<IAlbum[]> {
    this.spinnerS.show();
    return this.http
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&format=json&api_key=${this.apiKey}&tag=${genre}`
      )
      .pipe(
        map((a: any) => a.albums.album),
        map((item: any) => {
          const albums = AlbumsStorage.get();
          return item.map((album: any) => ({
            image: album.image,
            artist: album.artist,
            name: album.name,
            like: albums.some((a: IAlbum) => a.name === album.name),
          }));
        }),
        finalize(() => this.spinnerS.hide())
      );
  }
}
