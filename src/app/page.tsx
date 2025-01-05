import Link from "next/link";
import { HydrateClient } from "@/trpc/server";
import CRMSection from "./_components/sections/CRMSection";
import HeroSection from "./_components/sections/HeroSection";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <HeroSection/>
        <CRMSection/>
      </main>
    </HydrateClient>
  );
}
