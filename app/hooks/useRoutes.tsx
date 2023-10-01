import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import useConversation from "./useConversation";
import CustomChatIcon from "../assets/Icons/Components/CustomChatIcon";
import CustomUsersIcon from "../assets/Icons/Components/CustomUsersIcon";
import CustomLogoutIcon from "../assets/Icons/Components/CustomLogoutIcon";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        active: pathname === "/conversations" || !!conversationId,
        icon: CustomChatIcon,
      },
      {
        label: "Users",
        href: "/users",
        active: pathname === "/users",
        icon: CustomUsersIcon,
      },
      {
        label: "Sign Out",
        href: "#",
        onClick: () => signOut(),
        icon: CustomLogoutIcon,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
