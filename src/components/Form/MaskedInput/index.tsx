import { IMaskInput } from 'react-imask';
import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';

/* interface MaskedInputProps {
  inputRef: (ref: HTMLInputElement) => void;
  props: TextFieldProps & IMaskInputProps<MaskElement>;
}
 */
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask='+{7} (#00) 000-00-00'
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

/* const MaskedTextField = IMaskMixin(({ inputRef, ...props }: MaskedInputProps) => (
  <TextField {...props} inputRef={inputRef} />
)); */

export function MaskedInput({ name }: { name: string }) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { value, onChange } }) => (
        <TextField
          value={value}
          error={!!methods.formState.errors[name]}
          helperText={methods.formState.errors[name]?.message?.toString()}
          onChange={onChange}
          InputProps={{
            inputComponent: TextMaskCustom as never,
          }}
        />
      )}
    />
  );
}
