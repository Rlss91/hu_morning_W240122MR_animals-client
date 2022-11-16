import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthGuardRoute from "./guard/AuthGuardRoute";
import NavBarComponent from "./components/Navbar.component";
import HomePage from "./page/Home.page";
import LoginPage from "./page/Login.page";
import NotFoundPage from "./page/NotFound.page";
import UploadPage from "./page/Upload.page";

function App() {
  return (
    <div className="container">
      <NavBarComponent />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <AuthGuardRoute path="/upload" component={UploadPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
