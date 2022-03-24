import IntEpisode from "./episodesTypes";
import seasonEpisodeNum from "./seasonEpisodeNum";
import MatchToSearch from "./matchToSearch";
import SummaryCleaning from "./summaryCleaning";
import { useEffect, useState } from "react";

export default function SingleEpisode(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [episode, setEpisode] = useState<IntEpisode[]>([]);

  useEffect(() => {
    const handleGetEpisodes = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/527/episodes");
      const episodeList: IntEpisode[] = await response.json();
      setEpisode([...episodeList]);
    };
    handleGetEpisodes();
  }, [episode]);

  const filterEpisodes = episode.filter((oneEpisode: IntEpisode) => {
    return (
      MatchToSearch(oneEpisode.name, searchText) ||
      MatchToSearch(oneEpisode.summary, searchText)
    );
  });

  const displayEpisodes = `Displaying ${filterEpisodes.length}/${episode.length} episodes.`;

  const mapName = filterEpisodes.map((value) => (
    <div key={value.id}>
      {" "}
      <h2>
        {" "}
        {value.name} {seasonEpisodeNum(value.season, value.number)}
      </h2>
      {value.image && (
        <img src={value.image.medium} alt="screenshot from episode" />
      )}
      {value.summary &&  SummaryCleaning(value.summary)}
    </div>
  ));

  const handleSearch = (e: string) => {
    setSearchText(e);
  };

  return (
    <>
      <input
        placeholder="search for episode"
        onChange={(e)=>handleSearch(e.target.value)}
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
