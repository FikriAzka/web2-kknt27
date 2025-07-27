import type { Metadata } from "next";
import PotensiUmkmClient from "./PotensiUmkmClient"; 

export const metadata: Metadata = {
  title: "PotensiUmkm",
  description: "Tentang PotensiUmkm",
};

export default function PotensiUmkm() {
  return <PotensiUmkmClient />;
}
