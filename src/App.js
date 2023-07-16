import { useState } from "react";
import { places } from "./data/places.js";
import { List } from "./components/List.js";
import { ImageSizeContext } from "./context/image-size.context.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List places={places} />
      </ImageSizeContext.Provider>
    </>
  );
}



