import searchImages from "./SearchImagesApi";
import SearchedImages from "./SearchedImages";
import "./App.css";
import SearchHeader from "./SearchHeader";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSumbit = async (submitValue) => {
    console.log(submitValue);
    const result = await searchImages(submitValue);
    setImages(result);
  };

  return (
    <div className="app">
      <SearchHeader searchInput={handleSumbit} />
      <SearchedImages images={images} />
    </div>
  );
}

export default App;
