import React, { useEffect, useState } from "react";
import fetchData from "./data";
import "./index.js";
import Load from "./Loading.js";

const Tours = () => {
  const [tour, setTour] = useState([]);
  const [readmore, setReadmore] = useState(false);
  const [Loading, setLoading] = useState(false);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetchData();
      setTour(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tour.filter((tours) => tours.id !== id);
    setTour(newTours);
  };

  if (Loading) {
    return <Load />;
  }

  if (tour.length === 0) {
    return (
      <div>
        <p className="title no-tours">No Tours left</p>
        <button onClick={() => fetchTours()}>Refresh Tours</button>
      </div>
    );
  }
  return (
    <div className="tour">
      {tour.map((data) => {
        const { id, name, info, image, price } = data;
        return (
          <div key={id}>
            <img src={image} className="images" alt="" srcset="" />
            <div className="tour-title">
              <h4>{name}</h4>
              <p className="prices">${price}</p>
            </div>
            {readmore ? info : `${info.substring(0, 200)}...`}
            <button className="readmore" onClick={() => setReadmore(!readmore)}>
              {readmore ? "show less" : "Read more"}
            </button>
            <p className="interested" onClick={() => removeTour(id)}>
              Not interested
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Tours;
