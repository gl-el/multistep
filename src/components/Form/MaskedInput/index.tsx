import { IMaskInputProps, IMaskMixin } from 'react-imask';
import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface MaskedStyledInputProps {
  inputRef: (ref: HTMLInputElement) => void;
  props: TextFieldProps & IMaskInputProps;
}

const MaskedTextField = IMaskMixin(({ inputRef, ...props }: MaskedStyledInputProps) => (
  <TextField {...props} inputRef={inputRef} />
));

export function MaskedInput({ name }: { name: string }) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { value, onChange } }) => (
        <MaskedTextField
          mask='+{7} (#00) 000-00-00'
          definitions={{
            '#': /[9]/,
          }}
          value={value}
          error={!!methods.formState.errors[name]}
          helperText={methods.formState.errors[name]?.message?.toString()}
          onChange={onChange}
        />
      )}
    />
  );
}
