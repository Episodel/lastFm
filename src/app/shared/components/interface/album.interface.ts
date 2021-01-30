export interface IAlbum {
  image?: { size: string; '#text': string }[];
  like: boolean;
  name: string;
  artist: { name: string; mbid: string; url: string };
}
