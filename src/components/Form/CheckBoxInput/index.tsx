import { Checkbox, CheckboxProps, FormControlLabel, FormHelperText } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface CheckBoxInputProps extends Omit<CheckboxProps, 'name'> {
  name: string;
  options: string[] | number[];
}

export function Checkboxes({ options, name }: CheckBoxInputProps) {
  const methods = useFormContext();
  return (
    <>
      <Controller
        name={name || ''}
        control={methods.control}
        render={({ field }) =>
          options.map((option, index) => (
            <FormControlLabel
              {...field}
              key={index}
              label={option}
              control={
                <Checkbox
                  onChange={() => {
                    if (!field.value.includes(option)) {
                      field.onChange([...field.value, option]);
                      return;
                    }
                    const newOption = field.value.filter((item) => item !== option);
                    field.onChange(newOption);
                  }}
                />
              }
            />
          ))
        }
      />
      <FormHelperText>{methods.formState.errors[name]?.message?.toString()}</FormHelperText>
    </>
  );
}
