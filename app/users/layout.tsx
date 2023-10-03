import Sidebar from "@/components/Sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UsersList from "@/components/Users/UsersList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <div className="flex flex-row">
      <Sidebar />
      <UsersList items={users!} />
      {children}
    </div>
  );
};

export default UsersLayout;
