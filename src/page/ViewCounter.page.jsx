import { useSelector } from "react-redux";

const ViewCounterPage = () => {
  // state.slice.variable
  const counter = useSelector((state) => state.counterSlice.counter);
  //const [counter, setCounter] = useState(0)
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">@</span>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputGroup1"
          placeholder="Counter"
          value={counter}
          readOnly
        />
        <label htmlFor="floatingInputGroup1">Counter</label>
      </div>
    </div>
  );
};

export default ViewCounterPage;
