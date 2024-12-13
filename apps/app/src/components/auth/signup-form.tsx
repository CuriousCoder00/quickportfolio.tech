import {
  userSignupSchema,
  UserSignupInput,
} from "@repo/validators/user.validations.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const form = useForm<UserSignupInput>({
    resolver: zodResolver(userSignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <AuthForm form={form}>
      <form action="" className="flex flex-col w-full gap-4">
        <AuthInput
          form={form}
          label="Full Name"
          name="name"
          placeholder="John Doe"
        />
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
        <AuthInput
          form={form}
          label="Confirm Password"
          name="confirmPassword"
          placeholder="******"
          type="password"
        />
        <Button type="submit" className="w-full">
          Signup
        </Button>
        <div>
          <p className="text-sm text-end">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-600">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default SignupForm;
