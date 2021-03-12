// All imports
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Restaurants from "./components/Restaurants";
function App() {
  return (
    <div id="Full">
      {/* Main Title for pages */}
      <header id="main-title">Yelpington</header>
      {/* Helps switch between the home pag and the restaurant page */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Restaurants/:Id" component={Restaurants} />
      </Switch>
    </div>
  );
}

export default App;
