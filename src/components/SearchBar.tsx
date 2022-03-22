import { useState } from "react"


export default function SearchBar(): JSX.Element{
const [searchText, setSearchText] = useState<string>("")
 const handleSearch = (e:any) =>{
     setSearchText(e.target.value)
     {console.log(searchText)}

 }

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