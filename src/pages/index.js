import { Inter } from "next/font/google";
import { Banner } from "@/Components/Home/Banner/Banner";
import LekhaCompo from "@/Components/Home/LekhaCompo/LekhaCompo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Banner></Banner>
      <LekhaCompo></LekhaCompo>
    </main>
  );
}
