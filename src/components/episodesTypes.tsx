export default interface IntEpisode {
  id: number;
  url: string;
  name: string | null;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: { average?: number | null };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  _links: { self: { href: string } };
}
