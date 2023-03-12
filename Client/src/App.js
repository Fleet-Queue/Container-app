import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import UserModeSelection from "./Pages/UserModeSelection";
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />
      <Route path="/user-mode" component={UserModeSelection} />
    </div>
  );
}

export default App;
