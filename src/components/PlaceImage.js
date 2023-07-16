import { useContext } from "react";
import { getImageUrl } from "../utils/get-img-url";
import { ImageSizeContext } from "../context/image-size.context";

export function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
