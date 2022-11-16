import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/Home.page";
import LoginPage from "./page/Login.page";
import NotFoundPage from "./page/NotFound.page";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
