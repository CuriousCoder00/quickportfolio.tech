import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  form: any;
  label: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
}

export const PasswordInput = ({
  form,
  label,
  name,
  placeholder,
  disabled,
  required,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="w-full relative">
              <Input
                className="bg-transparent"
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 cursor-pointer"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
          </FormControl>
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};
