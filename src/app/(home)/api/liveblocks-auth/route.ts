import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentuser} from "@clerk/nextjs/server"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function POST() {
    
}