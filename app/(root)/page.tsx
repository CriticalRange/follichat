import AuthForm from "@/components/Auth/Forms/AuthForm";
import { NextPage } from "next";
import Link from "next/link";

const page: NextPage = () => {
  return (
    <div className="flex flex-center items-center flex-col h-screen gap-4 text-white">
      <h1 className="text-5xl">Welcome back to Folli Chat!</h1>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <AuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
