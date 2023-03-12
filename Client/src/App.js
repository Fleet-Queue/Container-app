import { Route } from "react-router-dom";
import {Login} from "./Pages/Signin/Login";
import UserModeSelection from "./Pages/UserModeSelection";
function App() {
  return (
    <div className="App">
       <Route path="/" exact component={Login} />
      <Route path="/user-mode" component={UserModeSelection} />

    </div>
  );
}

export default App;
