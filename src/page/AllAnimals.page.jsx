import axios from "axios";
import { useEffect, useState } from "react";

const AllAnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get("/animals")
      .then(({ data }) => {
        setAnimals(data);
      })
      .catch((err) => {
        console.log("axios err", err);
      });
  }, []);
  return (
    <div className="card-group">
      {animals.map((animalItem) => (
        <div className="card" key={animalItem._id}>
          <img
            src={animalItem.img}
            className="card-img-top"
            alt={animalItem.name}
          />
          <div className="card-body">
            <h5 className="card-title">{animalItem.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllAnimalsPage;
