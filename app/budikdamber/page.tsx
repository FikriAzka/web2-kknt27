import type { Metadata } from "next";
import BudikdamberClient from "./BudikdamberClient"; 

export const metadata: Metadata = {
  title: "Budikdamber",
  description: "Tentang Budikdamber",
};

export default function Budikdamber() {
  return <BudikdamberClient />;
}
