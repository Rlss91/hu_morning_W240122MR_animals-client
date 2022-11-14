import { useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const CounterPage = () => {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState("0");
  const handleAdd1BtnClick = () => {
    dispatch(counterActions.add1());
  };
  const handleSub1BtnClick = () => {
    dispatch(counterActions.sub1());
  };
  const handleAddNumberBtnClick = () => {
    dispatch(counterActions.addNumber(10));
  };
  const handleTxtChange = (ev) => {
    setTxt(ev.target.value);
  };
  const handleAddNumberFromTxtBtnClick = () => {
    dispatch(counterActions.addNumber(txt));
    setTxt(0);
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
            value={txt}
            onChange={handleTxtChange}
          />
          <label htmlFor="floatingInputGroup1">Counter</label>
        </div>
      </div>
      <br />
      <button className="btn btn-info" onClick={handleAdd1BtnClick}>
        +1
      </button>
      <button className="btn btn-info" onClick={handleSub1BtnClick}>
        -1
      </button>
      <button className="btn btn-primary" onClick={handleAddNumberBtnClick}>
        Add 10
      </button>
      <button
        className="btn btn-primary"
        onClick={handleAddNumberFromTxtBtnClick}
      >
        Add number
      </button>
    </div>
  );
};

export default CounterPage;
