import type { Metadata } from "next";
import HomeClient from "./HomeClient"; 

export const metadata: Metadata = {
  title: "Beranda",
  description: "Selamat datang di Poslitkes",
};

export default function HomePage() {
  return <HomeClient />;
}
