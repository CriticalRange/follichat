import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import ConversationBody from "@/components/Conversations/ConversationBody/ConversationBody";
import ConversationForm from "@/components/Conversations/ConversationForm";
import ConversationHeader from "@/components/Conversations/ConversationHeader";

interface IParams {
  conversationId: string;
}

const conversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return <div className="ml-80">No conversation found</div>;
  }

  return (
    <div className="flex flex-col h-full w-full ml-2">
      <ConversationHeader conversation={conversation} />
      <ConversationBody initialMessages={messages} />
      <ConversationForm />
    </div>
  );
};

export default conversationId;
