"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ConversationInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const ConversationInput: React.FC<ConversationInputProps> = ({
  id,
  placeholder,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="flex w-full">
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        required={required}
        {...register(id, { required })}
        className="
        rounded-xl
        text-white
        bg-black
        py-2
        px-4
        ml-1
        mr-2
        text-sm
        w-full
        placeholder:text-neutral-400
        transition
        duration-200
        ease-in-out
        "
      />
    </div>
  );
};

export default ConversationInput;
