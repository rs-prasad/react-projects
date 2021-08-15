import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newTour = data.filter((tour) => tour.id !== id);
    setData(newTour);
  };
  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (data.length === 0) {
    return (
      <>
        <h2>No Tour Left</h2>
        <button onClick={fetchTours} className="btn">
          Refresh
        </button>
      </>
    );
  }
  return (
    <>
      {loading && <Loading />}
      {!loading && <Tours tours={data} removeTour={removeTour} />}
    </>
  );
}

export default App;
