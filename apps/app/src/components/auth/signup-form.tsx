import { signupSchema, SignupInput } from "@repo/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { useNavigate } from "react-router";
import { signupService } from "../../lib/services/auth.services";
// import { useState } from "react";
const SignupForm = () => {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // const [loading, setLoading] = useState<boolean>(false);

  // const { toast } = useToast();

  const navigate = useNavigate();

  const handleSignup = async (data: SignupInput) => {
    // setLoading(true);
    try {
      const res = await signupService(data);
      // toast({
      //   title: res.message,
      //   variant: res.status ? "default" : "destructive",
      // });
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        navigate("/auth/login");
      }
    } catch (error) {
      // toast({
      //   title: (error as Error).message,
      //   variant: "destructive",
      // });
    } finally {
      // setLoading(false);
    }
  };
  return (
    <AuthForm form={form}>
      <form
        action=""
        className="flex flex-col w-full gap-4"
        onSubmit={form.handleSubmit(handleSignup)}
      >
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
      </form>
    </AuthForm>
  );
};

export default SignupForm;
