"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { useMemo } from "react";
import CustomAvatar from "../Shared/CustomAvatar";

interface ConversationHeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  conversation,
}) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <div className="flex flex-row w-full my-2 ml-4 items-center">
      <CustomAvatar currentUser={otherUser} />
      <div className="flex flex-col">
        <div className="text-white font-bold ml-2">
          {conversation.name || otherUser.name}
        </div>
        <div className="text-neutral-500 ml-2 text-sm font-light">
          {statusText}
        </div>
      </div>
    </div>
  );
};

export default ConversationHeader;
