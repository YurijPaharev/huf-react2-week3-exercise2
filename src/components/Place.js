import { PlaceImage } from "./PlaceImage";

export function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}
