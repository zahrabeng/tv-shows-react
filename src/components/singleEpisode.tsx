import IntEpisode from "./episodesTypes";
import episodeList from "../tvData.json";
import seasonEpisodeNum from "./seasonEpisodeNum";
import { useState } from "react"

export default function SingleEpisode(): JSX.Element {
const [searchText, setSearchText] = useState<string>("")

const allEpisodes:IntEpisode[] = [...episodeList]

const filterEpisodes = allEpisodes.filter((oneEpisode: IntEpisode) => { 
  return (oneEpisode.name.toLowerCase().includes(searchText.toLowerCase())||
  (oneEpisode.summary.toLowerCase().includes(searchText.toLowerCase())))});
    
  const displayEpisodes = `Displaying ${filterEpisodes.length}/${allEpisodes.length} episodes.`

const mapName = filterEpisodes.map((value) => (
  <div key={value.id}>
    {" "}
    <h2>
      {" "}
      {value.name} {seasonEpisodeNum(value.season, value.number)}
    </h2>
    <img src={value.image.medium} alt="screenshot from episode" />
    {value.summary.replace(/<\/?p>/g, " ")}
  </div>
));
  
const handleSearch = (e:any) =>{
  setSearchText(e.target.value)

 }


  return (
    <>
      <input
        placeholder="search for episode"
        onChange={handleSearch}
        value={searchText}
      />
      {displayEpisodes}
      <div>{mapName}</div>
      <p>Data taken from <a href="https://www.tvmaze.com/">TV Maze</a></p>  
    </>
  );
}
