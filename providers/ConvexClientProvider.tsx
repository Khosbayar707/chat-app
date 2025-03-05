"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  ConvexReactClient,
} from "convex/react";
import LoadingLogo from "@/components/shape/LoadingLogo";

type Props = { children: React.ReactNode };

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>{children}</Unauthenticated>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
export default ConvexClientProvider;
