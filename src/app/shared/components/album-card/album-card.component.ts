import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAlbum } from '../interface/album.interface';
import { IAlbumStorage } from '../interface/album-storage.interface';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input()
  public albumData: IAlbum | undefined;
  @Input()
  public idx: number | undefined;
  @Output()
  public addToLocalStorage: EventEmitter<IAlbumStorage> = new EventEmitter<
    IAlbumStorage
  >();

  constructor() {}

  ngOnInit(): void {}

  public setAlbumData(): void {
    this.addToLocalStorage.emit({
      // @ts-ignore
      albumData: this.albumData,
      // @ts-ignore
      idx: this.idx,
    });
  }
}
