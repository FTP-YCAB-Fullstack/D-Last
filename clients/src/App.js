import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OnlyPublic from "./routes/OnlyPublic";
import OnlyAdmin from "./routes/OnlyAdmin";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import HospitalPage from "./pages/HospitalPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import CeritaPage from "./pages/StoryPage";
import VolunteerPage from "./pages/VolunteerPage";
import Private from "./routes/Private";
import ConditionPage from "./pages/ConditionPage"
import VolunteerRegist from "./pages/VolunteerRegist";
import VerifPage from "./pages/verifPage";

function App() {
  return (
    <>
      <Router>
      <Switch>
        <OnlyPublic path="/login" exact component={LoginPage}/>
        <OnlyPublic path="/register" exact component={RegisterPage}/>
        <OnlyPublic path="/success" exact component={VerifPage}/>
        <Private path='/cerita' exact component={CeritaPage}/>
        <Route path='/rumah-sakit' exact component={HospitalPage}/>
        <Route path='/health-condition' exact component={ConditionPage}/>
        <Private path='/volunteer' exact component={VolunteerPage}/>
        <Route path="/" exact component={HomePage} />
        <OnlyAdmin path="/admin" exact component={AdminPage} />
        <OnlyAdmin path="/admin-volunteer" exact component={VolunteerRegist} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
