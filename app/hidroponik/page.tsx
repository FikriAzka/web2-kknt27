import type { Metadata } from "next";
import HidroponikClient from "./HidroponikClient"; 

export const metadata: Metadata = {
  title: "Hidroponik",
  description: "Tentang Hidroponik",
};

export default function Hidroponik() {
  return <HidroponikClient />;
}
