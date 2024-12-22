import { signupSchema, SignupInput } from "@repo/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { useNavigate } from "react-router";
import { signupService } from "../../lib/services/auth.services";
import { useToast } from "@repo/ui/hooks/use-toast";
import { useState } from "react";
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

  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const navigate = useNavigate();

  const handleSignup = async (data: SignupInput) => {
    setLoading(true);
    try {
      const res = await signupService(data);
      toast({
        title: res.message,
        variant: res.success === true ? "default" : "destructive",
      });
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        navigate("/auth/login");
      }
    } catch (error) {
      toast({
        title: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={form.handleSubmit(handleSignup)}
      >
        <AuthInput
          form={form}
          disabled={loading}
          label="Full Name"
          name="name"
          placeholder="John Doe"
        />
        <AuthInput
          form={form}
          label="Email Address"
          disabled={loading}
          name="email"
          placeholder="john.doe@gmail.com"
        />
        <AuthInput
          form={form}
          label="Password"
          name="password"
          disabled={loading}
          placeholder="******"
          type="password"
        />
        <AuthInput
          form={form}
          label="Confirm Password"
          disabled={loading}
          name="confirmPassword"
          placeholder="******"
          type="password"
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </AuthForm>
  );
};

export default SignupForm;
