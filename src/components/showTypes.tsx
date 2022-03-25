export default interface showTypes {
  id: number|null ;
  url: string|null;
  name: string|null;
  type: string|null;
  language: string|null;
  genres: string[]|null;
  status: string|null;
  runtime: number|null;
  averageRuntime: number|null;
  premiered: string|null;
  ended: string|null;
  officialSite: string|null;
  schedule: {
    time: string|null;
    days: string[]|null;
  };
  rating: {
    average: null | string;
  };
  weight: number|null;
  network: {
    id: number|null;
    name: string|null;
    country: {
      name: string|null;
      code: string|null;
      timezone: string|null;
    };
    officialSite: null | string;
  };
  webChannel: {
    id: number|null;
    name: string|null;
    country: {
      name: string|null;
      code: string|null;
      timezone: string|null;
    };
    officialSite: null | string;
  };
  dvdCountry: null | string;
  externals: {
    tvrage: number|null;
    thetvdb: number|null;
    imbd: string|null;
  };
  image: {
    medium: string|null;
    original: string|null;
  };
  summary: string|null;
  updated: number|null;
  _links: { self: { href: string|null } ;
    previousepisode: null | {
     href: string|null;
    } 
  };
}
