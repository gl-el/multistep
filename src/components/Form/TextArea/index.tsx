import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import s from './TextArea.module.scss';

interface TextAreaProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  rows: number;
  max: number;
}

export function TextArea({ name, rows, max, ...props }: TextAreaProps) {
  const methods = useFormContext();

  return (
    <Controller
      name={name || ''}
      control={methods.control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <TextField
            multiline
            rows={rows}
            value={value || ''}
            error={!!error?.message || false}
            helperText={error?.message || ' '}
            onChange={onChange}
            {...props}
          />
          <p className={s.counter}>{`${value.length}/${max}`}</p>
        </>
      )}
    />
  );
}
