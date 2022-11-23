import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleTextChange = (ev) => {
    let newUserData = JSON.parse(JSON.stringify(userData));
    newUserData[ev.target.id] = ev.target.value;
    setUserData(newUserData);
  };
  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/register", userData);
      toast.info("Please check your email, to confirm your email🙏", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={handleTextChange}
          value={userData.name}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterPage;
