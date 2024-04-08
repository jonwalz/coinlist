import CryptoTable from "./CryptoTable";
import { fetchCryptoData } from "./client";

export default async function Home() {
  const { data, error } = await fetchCryptoData();

  if (error) {
    return <div className="p-4">Error fetching data</div>;
  }

  return (
    <main className="p-4">
      <CryptoTable cryptoData={data} />
    </main>
  );
}
