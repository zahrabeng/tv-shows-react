import { useState } from "react"
import IntEpisode from "./episodesTypes";
import episodeList from "../tvData.json";



export default function SearchBar(): JSX.Element{

    const [searchText, setSearchText] = useState<string>("")
 
    const handleSearch = (e:any) =>{
     setSearchText(e.target.value)
     {console.log(searchText)}

    }
    const filterEpisodes = episodeList.filter((oneEpisode: IntEpisode) => {oneEpisode.name.includes(searchText)||oneEpisode.summary.includes(searchText)

    })
    
  



    return (
    <>
    <input
    placeholder="search for episode"
    onChange={handleSearch}
    value={searchText}
    

    />
    </>
)
}