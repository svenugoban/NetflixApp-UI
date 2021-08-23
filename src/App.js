import './app.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Watch from "./pages/watch/Watch.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";


function App() {

  return (
    <Router>
    <Switch>

    <Route exact path="/" component={Register} />

    <Route exact path="/watch" component={Watch} />

    <Route exact path="/home" component={Home} />

    <Route exact path="/login" component={Login} />

    </Switch>
    </Router>
    
  );
}
export default App;
