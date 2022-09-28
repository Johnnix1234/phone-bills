import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Reset from "./components/reset";
import Register from "./components/register";
import Vend from "./components/vend";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Navbar />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/resetpassword">
              <Reset />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/vend">
              <Vend />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
