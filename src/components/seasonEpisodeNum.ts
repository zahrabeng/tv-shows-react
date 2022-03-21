/* Season number and episode number must be displayed as an episode code:
Each part must be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
You must extract a pure function to generate this episode code from an episode object, 
and write unit tests for it with jest.

*/
// import IntEpisode from "./episodesTypes";
// import episodeList from "../tvData.json";

export default function seasonEpisodeNum(season:number): string{
    let stringSeason = ""
    if(season < 10){
        stringSeason = `S0${season}` 
    }else{
        stringSeason = `S${season}` 
    }return stringSeason
}

