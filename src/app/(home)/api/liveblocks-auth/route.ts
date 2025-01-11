import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentuser} from "@clerk/nextjs/server"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function POST(req: Request) {
    const { sessionClaims } = await auth();
    if (!sessionClaims) {
        return new Response("Unauthorized", { status: 401 })
    }
    
    const user = await currentuser();
    if (!user) {
        return new Response("Unauthorized", { status: 401 })
    }

    const { room } = await req.json();
    
}