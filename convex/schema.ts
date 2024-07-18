import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  prayers: defineTable({
    title: v.string(),
    count: v.optional(v.number()),
    bibleVerse: v.optional(v.string()),
  }),
});
