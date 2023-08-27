import { useState } from "react";
import "./App.css";
import data from "./cars.json";

const App = () => {
  const [readMore, setReadMore] = useState(true);

  const handleRead = () => {
    if (readMore === true) {
      setReadMore(false);
    }
    if (readMore === false) {
      setReadMore(true);
    }
  };
  return (
    <div className="container">
      <h1>[ List ]</h1>
      <div
        className={readMore === false ? "list_container22" : "list_container"} >
        <ul>
          {data.cars.map((car) => (
            <li>{car.name}</li>
          ))}
        </ul>
        <p class={readMore === false ? "read-more22" : "read-more"}>
          <button
            onClick={() => {handleRead()}}>
            Read More... ▽
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
