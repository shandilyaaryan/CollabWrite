import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values"

export const create = mutation({
  args: { title: v.optional(v.string()), initialContent: v.optional(v.string())},
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user){
      throw new ConvexError("Unauthorized")
    }

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: user.subject,
      initialContent: args.initialContent
    })
  }
})

export const get = query({
    handler: async (ctx) => {
      return await ctx.db.query("documents").collect();
    },
  });