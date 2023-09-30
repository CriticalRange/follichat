"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Image from "next/image";

type Variant = "login" | "register";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === "login") {
      setVariant("register");
    } else {
      setVariant("login");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (
    data,
    event?: React.BaseSyntheticEvent
  ) => {
    if (event) {
      event.preventDefault();
    }

    setIsLoading(true);

    if (variant === "login") {
    }

    if (variant === "register") {
    }
  };

  const socialAuthAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign In
  };
  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className="rounded-xl placeholder:text-gray"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="mt-2 grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className="rounded-xl placeholder:text-gray"
              id="email"
              placeholder="***************"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="mt-4" variant="outline" disabled={isLoading}>
            {isLoading ? <div>Loading...</div> : "Sign In"}
          </Button>
        </div>
      </form>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="mx-4 text-gray-400">Or Continue With</div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex items-center flex-center">
        <Button
          variant="outline"
          className="rounded-xl"
          size="icon"
          disabled={isLoading}
          onClick={() => socialAuthAction("google")}
        >
          {isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="4" cy="12" r="3" fill="currentColor">
                <animate
                  id="svgSpinners3DotsBounce0"
                  attributeName="cy"
                  begin="0;svgSpinners3DotsBounce1.end+0.25s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  values="12;6;12"
                />
              </circle>
              <circle cx="12" cy="12" r="3" fill="currentColor">
                <animate
                  attributeName="cy"
                  begin="svgSpinners3DotsBounce0.begin+0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  values="12;6;12"
                />
              </circle>
              <circle cx="20" cy="12" r="3" fill="currentColor">
                <animate
                  id="svgSpinners3DotsBounce1"
                  attributeName="cy"
                  begin="svgSpinners3DotsBounce0.begin+0.2s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  values="12;6;12"
                />
              </circle>
            </svg>
          ) : (
            <Image
              src="/images/googleIcon.svg"
              width={30}
              height={30}
              alt="Login with Google"
            />
          )}
        </Button>
      </div>
      {variant === "login" ? (
        <div className="flex items-center flex-center">
          <Button className="rounded-xl" onClick={toggleVariant}>
            <p className="text-gray-300 text-center">I am new here</p>
          </Button>
        </div>
      ) : (
        <div className="flex items-center flex-center">
          <Button className="rounded-xl" onClick={toggleVariant}>
            <p className="text-gray-300 text-center">
              I already have an account
            </p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
