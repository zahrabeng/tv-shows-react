import IntEpisode from "./episodesTypes";
import seasonEpisodeNum from "./seasonEpisodeNum";
import MatchToSearch from "./matchToSearch";
import SummaryCleaning from "./summaryCleaning";
import { useEffect, useState } from "react";
import allShows from "../allShows.json";
import showTypes from "./showTypes";

export default function SingleEpisode(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [episode, setEpisode] = useState<IntEpisode[]>([]);
  const [show, setShow] = useState<string>(
    "https://api.tvmaze.com/shows/527/episodes"
  );

  const everyShow: any = [...allShows];

  useEffect(() => {
    const handleGetEpisodes = async () => {
      const response = await fetch(show);
      const episodeList: IntEpisode[] = await response.json();
      setEpisode([...episodeList]);
    };
    handleGetEpisodes();
  }, [show]);

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
      {value.summary && SummaryCleaning(value.summary)}
    </div>
  ));

  const handleSearch = (e: string) => {
    setSearchText(e);
  };

  const handleShowClick = (url: string) => {
    setShow(url);
    console.log(show)
  };

  return (
    <>
      <input
        placeholder="search for episode"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchText}
      />

      <select onChange={(e) => handleShowClick(e.target.value)}>
        <option>select a TV show</option>

        {everyShow.map((singleShow: showTypes) => (
          <option key={singleShow.id} value={singleShow.url} >
            {singleShow.name}
          </option>
        ))}
      </select>
      {displayEpisodes}
      <div>{mapName}</div>
      <p>
        Data taken from <a href="https://www.tvmaze.com/">TV Maze</a>
      </p>
    </>
  );
}
