import { Inter } from "next/font/google";
import { Banner } from "@/Components/Home/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Banner></Banner>
    </main>
  );
}
