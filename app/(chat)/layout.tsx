import Sidebar from "@/components/Sidebar/Sidebar";
import getUsers from "../actions/getUsers";

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default ChatLayout;
