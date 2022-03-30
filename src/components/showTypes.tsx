export default interface showTypes {
  id: number;
  url: string | null;
  name: string;
  type: string | null;
  language: string | null;
  genres: string[] | null;
  status: string | null;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string | null;
    days: string[] | null;
  } | null;
  rating: null | {
    average: null | number;
  };
  weight: number | null;
  network: {
    id: number | null;
    name: string | null;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    officialSite: null | string;
  } | null;
  webChannel: {
    id: number | null;
    name: string | null;
    country: {
      name: string | null;
      code: string | null;
      timezone: string | null;
    } | null;
    officialSite: null | string;
  } | null;
  dvdCountry: null | string;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  } | null;
  image: {
    medium: string | null;
    original: string | null;
  } | null;
  summary: string | null;
  updated: number | null;
  _links: {
    self: { href: string | null } | null;
    previousepisode?: null | { href: string };
    nextepisode?: null | { href: string };
  } | null;
}
