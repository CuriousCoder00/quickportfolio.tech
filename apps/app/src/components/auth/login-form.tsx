import {
  userLoginSchema,
  UserLoginInput,
} from "@repo/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const form = useForm<UserLoginInput>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <AuthForm form={form}>
      <form action="" className="flex flex-col w-full gap-4 my-4">
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
        <div>
          <p className="text-sm text-end">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
