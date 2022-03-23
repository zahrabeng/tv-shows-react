import IntEpisode from "./episodesTypes";
import episodeList from "../simpsonsData.json";
import seasonEpisodeNum from "./seasonEpisodeNum";
import MatchToSearch from "./matchToSearch";
import SummaryCleaning from "./summaryCleaning";
import { useState } from "react";

export default function SingleEpisode(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");

  const allEpisodes: IntEpisode[] = [...episodeList];

  const filterEpisodes = allEpisodes.filter((oneEpisode: IntEpisode) => {
    if (oneEpisode.name!==null) {
      return MatchToSearch(oneEpisode.name,searchText) || MatchToSearch(oneEpisode.summary,searchText)
    }else{
      return MatchToSearch(oneEpisode.summary, searchText)
    }
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
