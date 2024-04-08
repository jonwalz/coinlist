import { Coin } from "../constants";
import { ingressCryptoData } from "../utils";

export async function fetchCryptoData() {
  try {
    const data: Coin[] = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw new Error(error);
      });

    const computedCryptoData = ingressCryptoData(data);

    return { data: computedCryptoData, error: false };
  } catch (error) {
    console.error(error);
    return { error: true, data: [] };
  }
}
