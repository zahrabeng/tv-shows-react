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
import episodeList from "../tvData.json"

const episodesArr:IntEpisode[] = episodeList
const mapName = episodesArr.map((value) => 
<li key={value.id}> {value.name} {value.season} {value.number}</li>
)

export default function SingleEpisode():JSX.Element{
    return(
        <>
            <div>{mapName}</div>
        </>
    )
}


