import episodes from "./tvData.json";
console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

const episodesArr:IntEpisode[] = episodes

interface IntEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

const mapId = episodesArr.map((value)=> <li key={value.id}> {value.name} </li>)
function App(): JSX.Element {
  return (
    <>
      <li>{mapId}</li>
    </>
  );

}





export default App;
