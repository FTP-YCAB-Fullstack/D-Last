import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HospitalPage from "./pages/HospitalPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import CeritaPage from "./pages/StoryPage";
import VolunteerPage from "./pages/VolunteerPage";
import Private from "./routes/Private";

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path='/cerita' exact component={CeritaPage}/>
        <Route path='/rumah-sakit' exact component={HospitalPage}/>
        <Route path='/volunteer' exact component={VolunteerPage}/>
        <Private path="/home" exact component={HomePage} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
