import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleTextChange = (ev) => {
    let newUserData = JSON.parse(JSON.stringify(userData));
    newUserData[ev.target.id] = ev.target.value;
    setUserData(newUserData);
  };
  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", userData);
      console.log("data", data);
      localStorage.setItem("token", data.token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleTextChange}
          value={userData.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleTextChange}
          value={userData.password}
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginPage;
