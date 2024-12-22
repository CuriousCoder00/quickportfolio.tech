import { userLoginSchema, UserLoginInput } from "@repo/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@repo/ui/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { loginService } from "../../lib/services/auth.services";
import { useToast } from "@repo/ui/hooks/use-toast";
const LoginForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<UserLoginInput>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (data: UserLoginInput) => {
    setLoading(true);
    try {
      const res = await loginService(data);
      toast({
        title: res.message,
        variant: res.success === true ? "default" : "destructive",
      });
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
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <AuthInput
          disabled={loading}
          form={form}
          label="Email Address"
          name="email"
          placeholder="john.doe@gmail.com"
        />
        <AuthInput
          disabled={loading}
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
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
