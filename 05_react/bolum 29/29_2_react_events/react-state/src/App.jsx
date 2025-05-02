import { sculptureList } from "./data";

function App() {
  let index = 0;
  let sculpture = sculptureList[index];

  function handlePreviousClick() {
    console.log("geri tıklandı");
  }

  function handleNextClick() {
    index = index + 1;
  }

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
      <p>{sculpture.description}</p>
    </>
  );
}

export default App;
