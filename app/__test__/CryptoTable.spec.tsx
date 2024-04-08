import CryptoTable from "../CryptoTable";
import { fireEvent, render, screen } from "@testing-library/react";
import { CryptoData } from "../constants";

const mockCryptoData: CryptoData[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: 123,
    marketCap: 5000000,
    volume: 333333,
    circulatingSupply: 321,
    change: 1.1,
    image: "https://www.cryptocompare.com/media/19633/btc.png",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: 234,
    marketCap: 6000000,
    volume: 444444,
    circulatingSupply: 432,
    change: 2.2,
    image: "https://www.cryptocompare.com/media/20646/eth_logo.png",
  },
];

describe("CryptoTable", () => {
  test("renders correctly", () => {
    render(<CryptoTable cryptoData={mockCryptoData} />);
  });

  test("renders the table with data", () => {
    render(<CryptoTable cryptoData={mockCryptoData} />);
    // Check if the table is present
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Check if the correct number of rows is rendered
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(mockCryptoData.length + 1); // including header row
  });

  test("filters tokens by name", () => {
    render(<CryptoTable cryptoData={mockCryptoData} />);
    // Find the filter input and change its value
    const filterInput = screen.getByPlaceholderText("Filter tokens by name");
    fireEvent.change(filterInput, { target: { value: "Bitcoin" } });

    // Check if only the row with "Bitcoin" is displayed
    const bitcoinRow = screen.getByText("Bitcoin");
    expect(bitcoinRow).toBeInTheDocument();

    // Check if the row with "Ethereum" is not displayed
    const ethereumRow = screen.queryByText("Ethereum");
    expect(ethereumRow).not.toBeInTheDocument();
    screen.debug();
  });
  test("sorts the table by column", () => {
    render(<CryptoTable cryptoData={mockCryptoData} />);

    // Find the header for the column to sort by, for example 'price', and click it to sort
    const priceHeader = screen.getByText("Price");
    fireEvent.click(priceHeader);

    // After clicking, the rows should be sorted by price in ascending order
    // Assuming the first row after the header is the start of the data rows
    const firstRowPrice = screen
      .getAllByRole("row")[1]
      .querySelector("td:nth-child(4)"); // Replace '4' with the actual index of the price column
    expect(firstRowPrice).toHaveTextContent(mockCryptoData[0].price.toString());

    // Click again to sort by descending order
    fireEvent.click(priceHeader);

    // Check if the first row now has the highest price
    const sortedCryptoData = [...mockCryptoData].sort(
      (a, b) => b.price - a.price
    );
    const firstRowPriceDesc = screen
      .getAllByRole("row")[1]
      .querySelector("td:nth-child(4)"); // Replace '4' with the actual index of the price column
    expect(firstRowPriceDesc).toHaveTextContent(
      sortedCryptoData[0].price.toString()
    );
  });
});
