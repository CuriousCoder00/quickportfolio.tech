import { userLoginSchema, UserLoginInput } from "@repo/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { Link } from "react-router";
import { useTransition } from "react";
import { loginService } from "../../lib/services/auth.services";
const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<UserLoginInput>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (data: UserLoginInput) => {
    startTransition(() => {
      const res = loginService(data);
      res.then((response) => {
        console.log(response);
      });
    });
  };

  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <AuthInput
          form={form}
          label="Email Address"
          name="email"
          placeholder="john.doe@gmail.com"
        />
        <AuthInput
          form={form}
          label="Password"
          name="password"
          placeholder="******"
          type="password"
        />
        <p className="text-xs text-end">
          <Link to="/auth/register" className="text-sky-600">
            Forgot Password?
          </Link>
        </p>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
