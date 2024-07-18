import { v } from "convex/values";
import { internalAction, mutation, query } from "./_generated/server";
import OpenAI from "openai";
import { api, internal } from "./_generated/api";

const openai = new OpenAI();

export const addPrayer = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, { title }) => {
    const data = await ctx.db.insert("prayers", {
      title,
    });

    console.log("data: ", data);

    const prayer = await ctx.db.get(data);

    if (prayer && !prayer?.bibleVerse) {
      console.log("should run action!!");
      await ctx.scheduler.runAfter(0, internal.prayer.getVerse, {
        prayer_id: prayer._id,
        prayer: prayer.title,
      });
    }
    // console.log("prayer: ", prayer);
  },
});

export const increasePrayCounter = mutation({
  args: {
    prayer_id: v.id("prayers"),
  },
  handler: async (ctx, { prayer_id }) => {
    const prayer = await ctx.db.get(prayer_id);
    console.log("found: ", prayer?.count);

    if (!prayer?.count) {
      console.log("no count");
      await ctx.db.patch(prayer_id, { count: 1 });
    } else {
      await ctx.db.patch(prayer_id, { count: prayer.count + 1 });
    }
  },
});

// export const addBibleVerse = mutation({
//   args: {},
//   handler: async (ctx, args) => {
//     const prayers = await ctx.db.query("prayers").collect();
//     console.log("adding bible verse");
//     // await ctx.scheduler.runAfter(0, internal.prayer.getVerse);
//     // prayers.map(async (prayer) => {
//     //   if (!prayer.bibleVerse) {
//     //     await ctx.scheduler.runAfter(0, internal.prayer.getVerse, {
//     //       prayer_id: prayer._id,
//     //     });
//     //   }
//     // });
//   },
// });

export const getVerse = internalAction({
  args: { prayer_id: v.id("prayers"), prayer: v.string() },
  handler: async (ctx, args) => {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Provide a string of KJV bible verse for this prayer:${args.prayer}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const response = completion.choices[0].message.content ?? "";
    console.log("completion: ", response);

    await ctx.runMutation(api.prayer.insertBibleVerse, {
      verse: response,
      prayer_id: args.prayer_id,
    });
  },
});

export const insertBibleVerse = mutation({
  args: { verse: v.string(), prayer_id: v.id("prayers") },
  handler: async (ctx, args) => {
    const prayers = await ctx.db.query("prayers").collect();
    console.log("adding bible verse");

    await ctx.db.patch(args.prayer_id, { bibleVerse: args.verse });
    // await ctx.scheduler.runAfter(0, internal.prayer.getVerse);
    // prayers.map(async (prayer) => {
    //   if (!prayer.bibleVerse) {
    //     const completion = await openai.chat.completions.create({
    //       messages: [
    //         {
    //           role: "user",
    //           content: `Provide a string of KJV bible verse for this prayer: ${prayer.title}`,
    //         },
    //       ],
    //       model: "gpt-3.5-turbo",
    //     });

    //     console.log("completion: ",completion)
    //   }
    // });
  },
});

export const getAllPrayers = query({
  args: {},
  handler: async (ctx, args) => {
    return (await ctx.db.query("prayers").collect()).reverse();
  },
});
