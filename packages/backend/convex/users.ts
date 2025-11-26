import { mutation, query } from "./_generated/server";

export const getMany = query({
    args: {},
    handler: async (ctx: any) => {
        const users = await ctx.db.query("users").collect();

        return users;
    }
})

export const addUser = mutation({
    args: {},
    handler: async (ctx: any) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) throw new Error("Not authenticated");

        const orgId = identity.orgId as string;

        if (!orgId) throw new Error("Missing organization");

        throw new Error("Tracking test");

        const userId = await ctx.db.insert("users", {
            name: "Harsh Engineer",
        })

        return userId;
    }
})