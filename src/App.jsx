import "./App.css";
import Card from "./components/Card/card";
import Grid from "./components/Grid/Grid";
function App() {
  return (
    <>
      <div>
        <Grid numberOfCards={9} />
      </div>
    </>
  );
}

export default App;
