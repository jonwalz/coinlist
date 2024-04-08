import { Coin, CryptoData } from "./constants";

export function ingressCryptoData(cryptoData: Coin[]): CryptoData[] {
  return cryptoData.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    price: coin.current_price,
    marketCap: coin.market_cap,
    volume: coin.total_volume,
    circulatingSupply: coin.circulating_supply,
    change: coin.price_change_percentage_24h,
    image: coin.image,
  }));
}
