export default function MatchToSearch(a: string, b: string): boolean {
  return a.toLowerCase().includes(b.toLowerCase());
}
