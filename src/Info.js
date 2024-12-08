export default function Info({ name, data }) {
  return (
    <>
      <h2>{name}</h2>

      <section>
        <p>Name: {data.name}</p>
        <p>Symbol: {data.symbol}</p>
        <p> Price (USD): ${data.price_usd}</p>
        <p>Market Cap (USD): ${data.market_cap_usd}</p>
      </section>
    </>
  );
}
