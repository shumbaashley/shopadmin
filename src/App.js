import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import DashboardContainer from "./components/dashboard/DashboardContainer"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import {ToastContainer} from 'react-toastify'
import { Fragment } from "react";
import 'react-toastify/dist/ReactToastify.css';






const App = () => {
  return (
    <Fragment>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute component={DashboardContainer}/>
      </Switch>
    </Router>
    <ToastContainer/>
    </Fragment>
  );
}

export default App;


