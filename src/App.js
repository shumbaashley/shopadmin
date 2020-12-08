import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import Tables from "./components/screens/Tables";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/tables" component={Tables}/>
      </Switch>
    </Router>
  );
}

export default App;
