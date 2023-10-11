import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
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
    <div>
      <ConversationHeader conversation={conversation} />
    </div>
  );
};

export default conversationId;
