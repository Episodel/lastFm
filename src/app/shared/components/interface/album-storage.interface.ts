import { IAlbum } from './album.interface';

export interface IAlbumStorage {
  albumData: IAlbum;
  idx: number;
}
