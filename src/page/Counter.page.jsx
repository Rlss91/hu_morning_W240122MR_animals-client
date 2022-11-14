import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const CounterPage = () => {
  const dispatch = useDispatch();
  const handleAdd1BtnClick = () => {
    dispatch(counterActions.add1());
  };
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Counter"
          />
          <label htmlFor="floatingInputGroup1">Counter</label>
        </div>
      </div>
      <br />
      <button className="btn btn-info" onClick={handleAdd1BtnClick}>
        +1
      </button>
      <button className="btn btn-info">-1</button>
      <button className="btn btn-primary">Add</button>
      <button className="btn btn-primary">Sub</button>
    </div>
  );
};

export default CounterPage;
