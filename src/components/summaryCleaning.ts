export default function SummaryCleaning(summary: string):string {
  return summary.replace(/<\/?\w>/g, "");
}
