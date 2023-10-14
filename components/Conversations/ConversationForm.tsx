"use client";

import CustomPhotoIcon from "@/app/assets/Icons/Components/CustomPhotoIcon";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ConversationInput from "./ConversationInput";
import { Button } from "../ui/button";
import CustomSendIcon from "@/app/assets/Icons/Components/CustomSendIcon";
import { CldUploadButton } from "next-cloudinary";

const ConversationForm = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", {
      shouldValidate: true,
    });
    axios.post(`/api/messages`, {
      ...data,
      conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    });
  };
  return (
    <div className="bg-black flex items-center mb-1 mx-1 rounded-xl">
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        onUpload={handleUpload}
        uploadPreset="shfvtfh3"
      >
        <CustomPhotoIcon />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center w-full"
      >
        <ConversationInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message..."
        />
        <Button size="icon">
          <CustomSendIcon />
        </Button>
      </form>
    </div>
  );
};

export default ConversationForm;
