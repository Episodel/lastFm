export interface IAlbumsResponse {
  albums: {
    '@attr': {
      page: string;
      perPage: string;
      tag: string;
      total: string;
      totalPages: string;
    };
    album: {
      '@attr': { rank: string };
      artist: { name: string; mbid: string; url: string };
      image: { size: string; '#text': string }[];
      mbid: string;
      name: string;
      url: string;
    }[];
  };
}
