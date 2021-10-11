import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/nav/nav";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import HospitalPage from "./pages/HospitalPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import CeritaPage from "./pages/StoryPage";
import VolunteerPage from "./pages/VolunteerPage";
import Private from "./routes/Private";
import ConditionPage from "./pages/ConditionPage"

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Private path='/cerita' exact component={CeritaPage}/>
        
        <Route path='/rumah-sakit' exact component={HospitalPage}/>
        <Route path='/health-condition' exact component={ConditionPage}/>
        <Private path='/volunteer' exact component={VolunteerPage}/>
        <Route path="/" exact component={HomePage} />
        <Private path="/admin" exact component={AdminPage} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
