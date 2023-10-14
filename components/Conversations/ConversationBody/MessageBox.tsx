import { FullMessageType } from "@/app/types";
import { useSession } from "next-auth/react";
import React from "react";
import clsx from "clsx";
import CustomAvatar from "@/components/Shared/CustomAvatar";
import moment from "moment";
import Image from "next/image";

interface MessageBoxProps {
  isLast?: boolean;
  data: FullMessageType;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;

  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  return (
    <div className={clsx("flex mx-2 my-2 text-white", isOwn && "justify-end")}>
      <div className="flex flex-row-reverse gap-2">
        <CustomAvatar currentUser={data.sender} />
        <div
          className={clsx(
            "flex flex-col gap-1",
            isOwn ? "items-end" : "items-start"
          )}
        >
          <div className="flex flex-row items-center gap-1">
            <div className="flex items-center">{data.sender.name}</div>
            <p className="text-gray-400 text-xs">
              {moment(data.createdAt).format("LT")}
            </p>
          </div>
          <div
            className={clsx(
              "text-sm w-fit overflow-hidden",
              isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
              data.image ? "rounded-md p-4" : "rounded-full py-2 px-3"
            )}
          >
            {data.image ? (
              <Image
                alt="Image"
                height={288}
                width={288}
                src={data.image}
                className="object-cover rounded cursor-pointer hover: scale-110 transition translate"
              />
            ) : (
              <div>{data.body}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
