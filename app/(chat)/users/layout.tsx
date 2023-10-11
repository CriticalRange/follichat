import UsersList from "@/components/Users/UsersList";
import getUsers from "../../actions/getUsers";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <div className="flex flex-col">
      {children}
      <UsersList items={users!} />
    </div>
  );
};

export default UsersLayout;
