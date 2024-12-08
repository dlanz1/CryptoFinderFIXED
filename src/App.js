import { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Bitcoin");
  const [data, setData] = useState({});

  useEffect(() => {
    const crypto = encodeURIComponent(name.toLowerCase());
    const url = `https://api.coinlore.net/api/tickers/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        const crypto = r.data.find(
          (coin) =>
            coin.name.toLowerCase() === name.toLowerCase() ||
            coin.symbol.toLowerCase() === name.toLowerCase()
        );
        setData(crypto || {});
      })
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title name="CryptoFinder" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
