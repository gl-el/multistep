import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export function TextInput({ name }: { name: string }) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { value, onChange } }) => (
        <TextField
          value={value || ''}
          error={!!methods.formState.errors[name]}
          helperText={methods.formState.errors[name]?.message?.toString()}
          onChange={onChange}
        />
      )}
    />
  );
}
