import DesktopSidebar from "./DesktopSidebar";
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar() {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
    </div>
  );
}

export default Sidebar;
