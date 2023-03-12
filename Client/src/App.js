import { Route } from "react-router-dom";
import {Login} from "./Pages/Signin/Login";
import {Transporter} from "./Pages/Transporter";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/transporter" exact component={Transporter} />

    </div>
  );
}

export default App;
