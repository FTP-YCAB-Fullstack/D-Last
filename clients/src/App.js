import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import Private from "./routes/Private";

function App() {
  return (
    <>
      <Router>
      <Switch>
        {/* <Route path="/home" exact component={HomePage}/> */}
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Private path="/home" exact component={HomePage} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
