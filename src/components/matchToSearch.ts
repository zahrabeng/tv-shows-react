export default function MatchToSearch(a: string | null, b: string): boolean {
  if (a === null) {
    return false;
  } else {
    return a.toLowerCase().includes(b.toLowerCase());
  }
}
