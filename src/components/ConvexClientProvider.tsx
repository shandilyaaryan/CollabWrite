"use client";

import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return  <ClerkProvider appearance={{ variables: { colorPrimary: 'black' }}} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
              <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Authenticated>
                  {children}
                </Authenticated>
                <Unauthenticated>
                  <div className="flex flex-col items-center justify-center min-h-screen">
                    <SignIn routing="hash" /> {/*TODO: Add main page*/}
                  </div>
                </Unauthenticated>
                <AuthLoading><FullscreenLoader label="Auth Loading..." /></AuthLoading>
              </ConvexProviderWithClerk>
          </ClerkProvider>;
}
