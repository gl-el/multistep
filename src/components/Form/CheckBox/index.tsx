import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form';

interface CheckBoxProps {
  name: string;
  label: string | number;
  value: string | number;
  id: string;
}

export function CheckBox({ name, label, id, value }: CheckBoxProps) {
  const methods = useFormContext();

  const handleOnChange = (field: ControllerRenderProps<FieldValues, string>) => {
    if (!field.value.includes(value)) {
      field.onChange([...field.value, value]);
      return;
    }
    const newOption = field.value.filter((item: unknown) => item !== value);
    field.onChange(newOption);
  };

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => (
        <FormControlLabel
          {...field}
          label={label}
          sx={{ gap: 1 }}
          control={<Checkbox id={id} checked={field.value.includes(value)} onChange={() => handleOnChange(field)} />}
        />
      )}
    />
  );
}
