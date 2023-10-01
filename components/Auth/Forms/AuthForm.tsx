"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import clsx from "clsx";
import { signIn, useSession } from "next-auth/react";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

export type AuthVariant = "login" | "register";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm = () => {
  // Shadcn toast
  const { toast } = useToast();

  // Hooks
  const session = useSession();
  const router = useRouter();

  // States
  const [authVariant, setAuthVariant] = useState<AuthVariant>("login");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
    }
  }, [session?.status, router]);

  const toggleAuthVariant = useCallback(() => {
    if (authVariant === "login") {
      setAuthVariant("register");
    } else {
      setAuthVariant("login");
    }
  }, [authVariant]);

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

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    if (authVariant === "login") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast({
              title: "Error! Invalid credentials",
              description: "Please try again",
              variant: "destructive",
              className: "text-white bg-red-500 rounded-xl",
            });
          }
          if (callback?.ok && !callback?.error) {
            toast({
              title: "Success!",
              description: "You have successfully logged in",
              variant: "default",
              className: "text-white bg-green-500 rounded-xl",
            });
            router.push("/users");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (authVariant === "register") {
      await axios
        .post("/api/register", data)
        .then(async (res) => {
          toast({
            title: "Success!",
            description: "You have successfully registered, logging you in...",
            variant: "default",
            className: "text-white bg-green-500 rounded-xl",
          });
          await signIn("credentials", data);
          router.push("/users");
        })
        .catch((err) => {
          toast({
            title: "Uh oh!",
            description:
              err.response.data.message ||
              "Something went wrong, Please try again",
            /* action: <ToastAction altText="Try again">Try again</ToastAction>, */
            variant: "destructive",
            className: "text-white bg-red-500 rounded-xl",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const socialAuthAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign In
    signIn(action, {
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast({
            title: "Error! Invalid credentials",
            description: "Please try again",
            variant: "destructive",
            className: "text-white bg-red-500 rounded-xl",
          });
        }
        if (callback?.ok && !callback?.error) {
          toast({
            title: "Success!",
            description: "You have successfully logged in",
            variant: "default",
            className: "text-white bg-green-500 rounded-xl",
          });
          router.push("/users");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid gap-2">
          {authVariant === "login" ? null : (
            <div className="mb-2 grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Password
              </Label>
              <Input
                className={clsx(
                  `rounded-xl placeholder:text-gray`,
                  errors["name"]
                )}
                disabled={isLoading}
                id="name"
                placeholder="Username"
                type="name"
                autoCapitalize="none"
                autoComplete="name"
                autoCorrect="off"
                {...register("name", { required: true })}
              />
            </div>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className={clsx(
                `rounded-xl placeholder:text-gray`,
                errors["email"]
              )}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
          </div>
          <div className="mt-2 grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              className={clsx(
                `rounded-xl placeholder:text-gray`,
                errors["password"]
              )}
              id="password"
              placeholder="***************"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <Button
            type="submit"
            className="mt-4"
            variant="outline"
            disabled={isLoading}
          >
            {isLoading ? (
              <div>Loading...</div>
            ) : authVariant === "login" ? (
              "Sign In"
            ) : authVariant === "register" ? (
              "Sign Up"
            ) : (
              "Sign In"
            )}
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
      {authVariant === "login" ? (
        <div className="flex items-center flex-center">
          <Button className="rounded-xl" onClick={toggleAuthVariant}>
            <p className="text-gray-300 text-center">I am new here</p>
          </Button>
        </div>
      ) : authVariant === "register" ? (
        <div className="flex items-center flex-center">
          <Button className="rounded-xl" onClick={toggleAuthVariant}>
            <p className="text-gray-300 text-center">
              I already have an account
            </p>
          </Button>
        </div>
      ) : (
        <div className="flex items-center flex-center">
          <Button className="rounded-xl" onClick={toggleAuthVariant}>
            <p className="text-gray-300 text-center">I am new here</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
