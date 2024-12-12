import { Form } from "@repo/ui/components/ui/form";
import React from "react";
const AuthForm = ({
  children,
  form,
}: {
  children: React.ReactNode;
  form: any;
}) => {
  return (
    <div className="flex flex-col items-start justify-center mx-auto shadow-inner dark:shadow-neutral-600 shadow-neutral-300 p-4 md:rounded-xl sm:rounded-lg gap-3 bg-slate-200 dark:bg-black">
      <div className="flex flex-col items-center justify-center w-full my-4">
        <h1 className="font-bold text-xl">
          Welcome Back to{" "}
          <span className="text-sky-600">QuickPotfolio.tech</span>
        </h1>
      </div>
      <Form {...form}>{children}</Form>
    </div>
  );
};

export default AuthForm;
