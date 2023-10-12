import ConversationsList from "@/components/Conversations/ConversationsList";
import getConversations from "../../actions/getConversations";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col">
        <div className="text-white text-4xl my-2 font-bold">Messages</div>
        <ConversationsList initialItems={conversations} />
      </div>
      {children}
    </div>
  );
};

export default ConversationsLayout;
