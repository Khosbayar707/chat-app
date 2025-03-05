import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import path from "path";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathname = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversation",
        icon: <MessageSquare />,
        active: pathname.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <Users />,
        active: pathname === "/friends",
      },
    ],
    [pathname]
  );
  return { paths };
};
