import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import CRMSection from "./_components/sections/CRMSection";
import HeroSection from "./_components/sections/HeroSection";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <HeroSection/>
        <CRMSection/>
      </main>
    </HydrateClient>
  );
}
