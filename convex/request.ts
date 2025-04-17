import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserByClierkId } from "./_utils";

export const create = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Unauthorized");
    }
    if (args.email === identity.email) {
      throw new ConvexError("Cannot request yourself");
    }

    const currentUser = await getUserByClierkId({
      ctx,
      clerkId: identity.subject,
    });
    if (!currentUser) {
      throw new ConvexError("User not found");
    }
    const reciever = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    if (!reciever) {
      throw new ConvexError("User could not be found");
    }

    const requestAlreadySent = await ctx.db
      .query("requests")
      .withIndex("by_reciever_sender", (q) =>
        q.eq("reciever", reciever._id).eq("sender", currentUser._id)
      );

    if (requestAlreadySent) {
      throw new ConvexError("request alreade sent");
    }
  },
});
