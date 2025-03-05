"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn } = useUser();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/sign-up");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading ? (
        <LoadingLogo />
      ) : isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button onClick={handleClick}>Click here</Button>
      )}
    </div>
  );
}
