import Hero from "@/components/root/Hero";
import MiddleImage from "@/components/root/MiddleImage";
import MostTrending from "@/components/root/MostTrending";
import NewDeals from "@/components/root/NewDeals";
import Popular from "@/components/root/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <NewDeals />
    <MostTrending />
    <MiddleImage />
    <Popular />
    </>
  );
}
