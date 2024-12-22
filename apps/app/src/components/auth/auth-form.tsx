import { Form } from "@repo/ui/components/ui/form";
import { Separator } from "@repo/ui/components/ui/separator";
import React from "react";
import { useLocation } from "react-router";
const AuthForm = ({
  children,
  form,
}: {
  children: React.ReactNode;
  form: any;
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="flex flex-col items-start justify-center mx-auto p-4 md:rounded-xl sm:rounded-lg gap-3 border border-border backdrop-blur-lg">
      <div className="flex flex-col items-center justify-center w-full my-4">
        {path === "/auth/login" ? (
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="font-bold text-xl">
              Welcome to{" "}
              <span className="text-sky-600">QuickPotfolio.tech</span>
            </h1>
            <p className="text-sm">
              Login to your account to continue using our services
            </p>
            <div className="flex items-center justify-center w-full max-w-sm overflow-hidden">
              <Separator /> OR <Separator />
            </div>
            <p className="text-sm">
              Don&apos;t have an account yet?{" "}
              <a href="/auth/register" className="text-sky-600">
                Create an account
              </a>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="font-bold text-xl">
              Create an account with{" "}
              <span className="text-sky-600">QuickPotfolio.tech</span>
            </h1>
            <p className="text-sm">
              Create an account to start using our services
            </p>
            <div className="flex items-center justify-center w-full max-w-sm overflow-hidden">
              <Separator /> OR <Separator />
            </div>
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/auth/login" className="text-sky-600">
                Login
              </a>
            </p>
          </div>
        )}
      </div>
      <Form {...form}>{children}</Form>
    </div>
  );
};

export default AuthForm;
