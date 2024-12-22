import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";

interface AuthInputProps {
  form: any;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
}

export const AuthInput = ({
  form,
  label,
  name,
  type,
  placeholder,
  disabled,
  required,
}: AuthInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
            className="bg-transparent"
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};
