/* HEADER
the episode's name
the season number (see below)
the episode number (see below)
-------------------------------
IMAGE OF EPISODE
------------------------------
episode summary - P TAG
*/

import IntEpisode from "./episodesTypes";
import episodeList from "../tvData.json";

const episodesArr: IntEpisode[] = episodeList;
const mapName = episodesArr.map((value) => (
  <div key={value.id}>
    {" "}
    <h2>
      {" "}
      {value.name} {value.season} {value.number}
    </h2>
    <img src={value.image.medium} alt="screenshot from episode" />
    {value.summary.replace(/<\/?p>/g, " ")}
  </div>
));

export default function SingleEpisode(): JSX.Element {
  return (
    <>
      <div>{mapName}</div>
    </>
  );
}
