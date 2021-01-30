import { StorageHelper } from '../storage.helper';
import { StorageTypeEnum } from '../enums/srorage-type.enum';
import { ALBUMS } from '../../constant/storage.contant';
import { IAlbum } from '../../../shared/components/interface/album.interface';

export class AlbumsStorage extends StorageHelper {
  constructor() {
    super();
  }

  static get(type = 0): any {
    return this.type(type).getItem(ALBUMS)
      ? JSON.parse(this.type(type).getItem(ALBUMS) as string)
      : [];
  }

  static set(albums: any, type: StorageTypeEnum = StorageTypeEnum.local): void {
    this.type(type).setItem(ALBUMS, JSON.stringify(albums));
  }

  static remove(album: IAlbum): void {
    const albums: IAlbum[] = this.get().filter(
      (a: IAlbum) => a.name !== album.name
    );
    this.set(albums);
  }
}
