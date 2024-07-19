import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";
import PrayerList from "@/components/prayer-list";
import PrayerForm from "@/components/PrayerForm";
import Image from "next/image";
import { PrayerListWrapper } from "./prayerListWrapper";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default async function Home() {
  return (
    <main className="flex dark:bg-dot-[#292828] bg-dot-[#cfcfcf] min-h-screen relative flex-col items-center py-8 lg:px-44 md:px-32 sm:px-20 px-4">
      <Navbar />

      <h1 className="font-bold mt-20 mb-10 text-5xl tracking-wide">
        How Can We Pray For You?
      </h1>
      <PrayerForm />

      <PrayerListWrapper />
    </main>
  );
}
