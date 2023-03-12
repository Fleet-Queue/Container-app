import { Route } from "react-router-dom";
import {Login} from "./Pages/Signin/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />

    </div>
  );
}

export default App;
