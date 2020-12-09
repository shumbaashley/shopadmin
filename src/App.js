import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import DashboardContainer from "./components/dashboard/DashboardContainer"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={DashboardContainer}/>
        
      </Switch>
    </Router>
  );
}

export default App;


