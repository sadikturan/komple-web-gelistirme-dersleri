import { useState } from "react";
import { sculptureList } from "./data";

function ReactState() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  console.log(index);

  return (
    <>
      <button onClick={handlePreviousClick}>Geri</button>
      <button onClick={handleNextClick}>İleri</button>

      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />

      <p>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} Details
        </button>
      </p>

      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default ReactState;
