"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import CustomAvatar from "../Shared/CustomAvatar";
import moment from "moment";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  // Hooks
  const router = useRouter();
  const otherUser = useOtherUser(data);
  const session = useSession();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }
    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a conversation with you";
  }, [lastMessage]);

  return (
    <div
      className="flex flex-col h-full w-full py-2 pl-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row">
        <CustomAvatar currentUser={otherUser} />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h1 className="text-white text-md ml-2 w-32 truncate">
              {data?.name || otherUser?.name}
            </h1>
          </div>
          <p
            className={clsx(
              "text-white ml-2 truncate",
              hasSeen ? "text-gray-500" : "text-white font-semibold"
            )}
          >
            {lastMessageText}
          </p>
        </div>
        {lastMessage?.createdAt && (
          <p className="flex text-white text-sm justify-end flex-1">
            {moment(lastMessage?.createdAt).format("LT")}
          </p>
        )}
      </div>
    </div>
  );
};

export default ConversationBox;
