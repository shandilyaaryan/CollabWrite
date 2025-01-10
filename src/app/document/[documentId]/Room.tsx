"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams()
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_8P-EvU8dGbH_LV2omJZoXXAigXV6Ze6OQYJyM-oBvANVKS2W-9gkDem2NofMx1LV"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}