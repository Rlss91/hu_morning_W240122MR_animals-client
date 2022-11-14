import "./App.css";
import CounterPage from "./page/Counter.page";
import ViewCounterPage from "./page/ViewCounter.page";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CounterPage />
        </div>
        <div className="col">
          <ViewCounterPage />
        </div>
      </div>
    </div>
  );
}

export default App;
