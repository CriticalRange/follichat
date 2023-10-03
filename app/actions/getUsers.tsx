import prisma from "@/app/libs/prismadb";
import getSession from "./getSessions";

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return null;
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUsers;
