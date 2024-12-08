import coinsImage from "./coins.png";

export default function Title({ name }) {
  return (
    <h1 className="title-header">
      <img src={coinsImage} alt="Coins" className="title-image1" />
      <p2>{name}</p2>
      <img src={coinsImage} alt="Coins" className="title-image2" />
    </h1>
  );
}
