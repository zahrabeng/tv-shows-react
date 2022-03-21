/* Season number and episode number must be displayed as an episode code:
Each part must be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
You must extract a pure function to generate this episode code from an episode object, 
and write unit tests for it with jest.

*/
// import IntEpisode from "./episodesTypes";
// import episodeList from "../tvData.json";

export default function seasonEpisodeNum(season:number , episode:number): string{
    let seasonPadding = ""
    let episodePadding = ""
    if(season  < 10 ){
        seasonPadding = "0"
    }if (episode < 10){
        episodePadding = "0"
    }return `S${seasonPadding}${season}E${episodePadding}${episode}` 
}

