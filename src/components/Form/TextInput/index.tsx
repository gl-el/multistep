import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface TextInputProps extends Omit<TextFieldProps, 'name'> {
  name: string;
}

export function TextInput({ name, ...props }: TextInputProps) {
  const methods = useFormContext();

  return (
    <Controller
      name={name || ''}
      control={methods.control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextField value={value || ''} error={!!error?.message || false} onChange={onChange} {...props} />
      )}
    />
  );
}
