import { FormControlLabel, Radio } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface RadioBoxProps {
  name: string;
  label: string | number;
  value: string | number;
  id: string;
}

export function RadioBox({ name, label, id, value }: RadioBoxProps) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => (
        <FormControlLabel
          {...field}
          label={label}
          sx={{ gap: 1 }}
          control={
            <Radio
              id={id}
              checked={field.value === value}
              onChange={() => {
                field.onChange(value);
              }}
            />
          }
        />
      )}
    />
  );
}
