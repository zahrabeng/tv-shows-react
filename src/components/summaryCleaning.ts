export default function SummaryCleaning(summary: string):string {
  return summary.replace(/<\/?p>/g, "");
}
