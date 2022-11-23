import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import AuthGuardRoute from "./guard/AuthGuardRoute";
import NavBarComponent from "./components/Navbar.component";
import HomePage from "./page/Home.page";
import LoginPage from "./page/Login.page";
import NotFoundPage from "./page/NotFound.page";
import UploadPage from "./page/Upload.page";
import NewAnimalPage from "./page/NewAnimal.page";
import AllAnimalsPage from "./page/AllAnimals.page";
import RegisterPage from "./page/Register.page";
import ForgetPasswordPage from "./page/ForgetPassword.page";
import ResetPasswordPage from "./page/ResetPassword.page";

function App() {
  return (
    <div className="container">
      <NavBarComponent />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgetpassword" component={ForgetPasswordPage} />
        <Route path="/resetpassword/:token" component={ResetPasswordPage} />
        <AuthGuardRoute path="/upload" component={UploadPage} />
        <Route path="/newanimal" component={NewAnimalPage} />
        <Route path="/allanimals" component={AllAnimalsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
