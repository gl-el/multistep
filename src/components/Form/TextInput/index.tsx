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
      render={({ field: { value, onChange } }) => (
        <TextField
          value={value || ''}
          error={!!methods.formState.errors[name || '']}
          helperText={methods.formState.errors[name || '']?.message?.toString()}
          onChange={onChange}
          {...props}
        />
      )}
    />
  );
}
