export default function SummaryCleaning(summary:string){
    return summary.replace(/<\/?p>/g, " ")
}