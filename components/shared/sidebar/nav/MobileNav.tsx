"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Users, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

const useNavigation = () => {
  const pathname = usePathname();

  return [
    {
      name: "Friends",
      href: "/friends",
      icon: <Users className="h-5 w-5" />,
      active: pathname === "/friends",
    },
    {
      name: "Conversation",
      href: "/conversation",
      icon: <MessageSquare className="h-5 w-5" />,
      active: pathname === "/conversation",
    },
  ];
};

const MobileNav = () => {
  const paths = useNavigation();
  const safePaths = Array.isArray(paths) ? paths : [];

  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
      <nav className="w-full">
        <ul className="flex justify-evenly items-center">
          {safePaths.length > 0 ? (
            safePaths.map((path, id) => (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        size="icon"
                        variant={path.active ? "outline" : "default"}
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
          <li className="flex flex-col items-center gap-4">
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
