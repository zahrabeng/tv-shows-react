import { greet } from "./utils/greet";
import episodes from "./tvData.json";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("World")}</h1>;{console.log(`Imported ${episodes} episode(s)`)}
    </>
  );
}

export default App;
