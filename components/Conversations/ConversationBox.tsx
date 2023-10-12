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
      className="flex flex-row h-full my-2 ml-2 cursor-pointer"
      onClick={handleClick}
    >
      <CustomAvatar currentUser={otherUser} />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="text-white text-md ml-2">
            {data?.name || otherUser?.name}
          </h1>
          {lastMessage?.createdAt && (
            <p className="text-white text-sm">
              {moment(lastMessage?.createdAt).format("LT")}
            </p>
          )}
        </div>
        <p
          className={clsx(
            "text-white ml-2",
            hasSeen ? "text-gray-500" : "text-white font-medium"
          )}
        >
          {lastMessageText}
        </p>
      </div>
    </div>
  );
};

export default ConversationBox;
