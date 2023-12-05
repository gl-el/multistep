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
        <div className={s.area}>
          <TextField
            multiline
            rows={rows}
            value={value || ''}
            error={!!error?.message || false}
            onChange={onChange}
            inputProps={{
              style: {
                padding: 0,
              },
            }}
            {...props}
          />
          <p className={s.counter}>{`${value.replaceAll(' ', '').length}/${max}`}</p>
        </div>
      )}
    />
  );
}
