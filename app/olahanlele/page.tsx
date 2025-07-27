import type { Metadata } from "next";
import OlahanLeleClient from "./OlahanLeleClient"; 

export const metadata: Metadata = {
  title: "OlahanLele",
  description: "Tentang OlahanLele",
};

export default function OlahanLele() {
  return <OlahanLeleClient />;
}
