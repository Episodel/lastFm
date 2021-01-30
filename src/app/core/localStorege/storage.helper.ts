import { IAlbum } from '../../shared/components/interface/album.interface';
import { StorageTypeEnum } from './enums/srorage-type.enum';

export class StorageHelper {
  private static readonly types: Storage[] = [localStorage, sessionStorage];

  static type(status: StorageTypeEnum): Storage {
    return this.types[status];
  }
}
