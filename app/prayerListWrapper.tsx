import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import PrayerList from "@/components/prayer-list";
// import { Tasks } from "./Tasks";

export async function PrayerListWrapper() {
  const preloadedPrayers = await preloadQuery(api.prayer.getAllPrayers);
  return <PrayerList preloadedPrayers={preloadedPrayers} />;
}
