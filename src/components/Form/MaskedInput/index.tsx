import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

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

interface TextMaskedProps extends Omit<TextFieldProps, 'name'> {
  name: string;
}

export function MaskedInput({ name, ...props }: TextMaskedProps) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextField
          {...props}
          value={value}
          error={!!error?.message || false}
          onChange={onChange}
          InputProps={{
            inputComponent: TextMaskCustom as never,
          }}
        />
      )}
    />
  );
}
