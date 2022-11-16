import { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [img, setImg] = useState(null);
  const handleImgChange = (ev) => {
    console.log(ev.target);
    if (ev.target.files.length) {
      //check if user choose image
      setImg(ev.target.files[0]); //put in state the image details
    }
  };
  const handleBtnClick = async (ev) => {
    try {
      const formData = new FormData();
      formData.append("avatar", img);
      let { data } = await axios.post("/upload", formData);
      console.log(data);
    } catch (err) {}
  };
  return (
    <div className="input-group">
      <input
        type="file"
        className="form-control"
        id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
        onChange={handleImgChange}
      />
      <button
        className="btn btn-outline-secondary"
        id="inputGroupFileAddon04"
        onClick={handleBtnClick}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadPage;
