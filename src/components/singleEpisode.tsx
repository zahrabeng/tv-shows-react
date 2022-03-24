import IntEpisode from "./episodesTypes";
//import episodeList from "../simpsonsData.json";
import seasonEpisodeNum from "./seasonEpisodeNum";
import MatchToSearch from "./matchToSearch";
import SummaryCleaning from "./summaryCleaning";
import { useEffect, useState } from "react";
import { Z_STREAM_ERROR } from "zlib";

export default function SingleEpisode(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [episode, setEpisode] = useState<IntEpisode[]>([]);
  
  let allEpisodes: IntEpisode[] = []
    const handleGetEpisodes = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/shows/82/episodes "
      )
      const episodeList:IntEpisode[] = await response.json()
      
      allEpisodes = [...episodeList]
      
      //setEpisode([ episodeList])
    }
    
    // const handleGetEpisodes = () =>{
    //   fetch("https://api.tvmaze.com/shows/82/episodes")
    //   .then((response) => response.json())
    //   .then((episodeList:IntEpisode) => allEpisodes =  episodeList)
      
    // }
      
    useEffect(()=> {
      handleGetEpisodes()
      console.log(allEpisodes)
      console.log("render")
      
    },[])


  // allEpisodes  = [...episode];

  const filterEpisodes = allEpisodes.filter((oneEpisode: IntEpisode) => {

      return (MatchToSearch(oneEpisode.name, searchText) || MatchToSearch(oneEpisode.summary , searchText))
  });

  const displayEpisodes = `Displaying ${filterEpisodes.length}/${allEpisodes.length} episodes.`;

  const mapName = filterEpisodes.map((value) => (
    <div key={value.id}>
      {" "}
      <h2>
        {" "}
        {value.name} {seasonEpisodeNum(value.season, value.number)}
      </h2>
      {(value.image) && <img src={value.image.medium} alt="screenshot from episode"/>}
      {SummaryCleaning(value.summary)}
    </div>
  ));

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        placeholder="search for episode"
        onChange={handleSearch}
        value={searchText}
      />
      {displayEpisodes}
      <div>{mapName}</div>
      <p>
        Data taken from <a href="https://www.tvmaze.com/">TV Maze</a>
      </p>
    </>
  );
}
