"use client";

import { api } from "@/convex/_generated/api";
import {
  Preloaded,
  useMutation,
  usePreloadedQuery,
  useQuery,
} from "convex/react";
import React from "react";
import { TbBible } from "react-icons/tb";
import { PiHandsPrayingLight } from "react-icons/pi";
import { AlertDialogDemo } from "./bible-modal";

const PrayerList = (props: {
  preloadedPrayers: Preloaded<typeof api.prayer.getAllPrayers>;
}) => {
  const allPrayers = usePreloadedQuery(props.preloadedPrayers);
  // const allPrayers = useQuery(api.prayer.getAllPrayers);
  const increasePrayerCount = useMutation(api.prayer.increasePrayCounter);
  return (
    <div className="grid md:auto-rows-[18rem]  mt-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-4 max-w-7xl ">
      {allPrayers?.map((prayer) => (
        <div
          key={prayer._id}
          className="row-span-1 dark:bg-[#151515] bg-background rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  border justify-between flex flex-col space-y-4"
        >
          <p className="">{prayer.title}</p>

          <section className="flex items-center gap-2 self-end">
            <p className="">{prayer?.count}</p>
            <PiHandsPrayingLight
              onClick={() => increasePrayerCount({ prayer_id: prayer._id })}
              className="self-end cursor-pointer text-primary/50 hover:text-primary hover:scale-110 transition-all"
              size={34}
            />
            <AlertDialogDemo verse={prayer.bibleVerse} />
            {/* <AnimatedModalDemo verse={prayer.bibleVerse} /> */}
            {/* <TbBible
              className="self-end ml-1 cursor-pointer text-primary/50 hover:text-primary hover:scale-110 transition-all"
              size={30}
            /> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default PrayerList;
