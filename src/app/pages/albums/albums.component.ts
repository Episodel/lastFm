import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../../core/api/api.service';

import { IAlbumStorage } from '../../shared/components/interface/album-storage.interface';
import { AlbumsStorage } from '../../core/localStorege/routes/album.storeg';
import { IAlbum } from '../../shared/components/interface/album.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumsService } from '../../shared/services/albums.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  genre = '';
  albums: IAlbum[] = [];
  albumsDefault: IAlbum[] = [];

  destroySubject$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private API: ApiService,
    private _snackBar: MatSnackBar,
    private albumsS: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((params: Params) => {
        this.genre = params.genre;
      });

    this.albumsS
      .getSearch$()
      .pipe(debounceTime(500), takeUntil(this.destroySubject$))
      .subscribe((value) => {
        this.albums = !!value
          ? this.albumsDefault.filter(
              (a) =>
                a.name.toLowerCase().includes(value.toLowerCase()) ||
                a.artist.name.toLowerCase().includes(value.toLowerCase())
            )
          : this.albumsDefault;
      });

    this.API.topic.getAlbums(this.genre).subscribe((res) => {
      this.albums = this.albumsDefault = res;
    });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public toLocalStorage(data: IAlbumStorage): void {
    this.albums[data.idx].like = !this.albums[data.idx].like;

    if (!this.albums[data.idx].like) {
      AlbumsStorage.remove(data.albumData);
      this.albumsS.setCounterLike(this.getCountLikes);
      this.openSnackBar(data.albumData.name, 'Remove like');
      return;
    }
    const indexAlbum = AlbumsStorage.get().findIndex(
      (a: IAlbum) => a.name === data.albumData.name
    );

    if (indexAlbum === -1) {
      const albums = [...AlbumsStorage.get(), data.albumData];
      AlbumsStorage.set(albums);
    } else {
      const albums = AlbumsStorage.get();
      albums[indexAlbum].like = data.albumData.like;
      AlbumsStorage.set(albums);
    }
    this.albumsS.setCounterLike(this.getCountLikes);
    this.openSnackBar(data.albumData.name, 'Like');
  }

  get getCountLikes(): number {
    return AlbumsStorage.get().length;
  }
}
