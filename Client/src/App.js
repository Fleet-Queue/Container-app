import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />

    </div>
  );
}

export default App;
