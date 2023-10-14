"use client";

import React, { useState } from "react";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import ConversationBox from "./ConversationBox";

interface ConversationsLayoutProps {
  initialItems: FullConversationType[];
}

const ConversationsList: React.FC<ConversationsLayoutProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-fit my-1 border-gray-500 border-l-2">
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
