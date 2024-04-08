import { ColumnDef } from "@tanstack/react-table";
import { CryptoData } from "./constants";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const columns: ColumnDef<CryptoData>[] = [
  {
    accessorKey: "image",
    header: "Crypto",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")}
        alt={row.getValue("name")}
        width={30}
        height={30}
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "symbol",
    header: ({ column }) => (
      <Button
        className="text-center flex w-full"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ticker
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">{row.getValue("symbol")}</div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        className="text-center flex w-full"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("price")}</div>;
    },
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <Button
        className="text-center flex w-full"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Market Cap
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("marketCap")}</div>;
    },
  },
  {
    accessorKey: "volume",
    header: ({ column }) => (
      <Button
        className="text-center flex w-full"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Volume
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("volume")}</div>;
    },
  },
];
