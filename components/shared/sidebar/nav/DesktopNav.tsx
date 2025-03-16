"use client";

import { useNavigation } from "@/app/hooks/useNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";

const DesktopNav = () => {
  const paths = useNavigation();
  const safePaths = Array.isArray(paths) ? paths : []; // Fallback if not an array

  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4 text-white">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          {safePaths.length > 0 ? (
            safePaths.map((path, id) => (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        size="icon"
                        variant={path.active ? "default" : "outline"}
                      >
                        {path.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{path.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4">
        <UserButton />
      </div>
    </Card>
  );
};

export default DesktopNav;
