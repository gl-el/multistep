import { useFormContext } from 'react-hook-form';
import { TextArea } from '@/components/Form';
import { FormHelperText, InputLabel, Stack } from '@mui/material';

export function ThirdForm({ id }: { id: string }) {
  const methods = useFormContext();
  const errors = methods.formState.errors;

  const onSubmit = async () => {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(methods.getValues()),
      });
      const result = await response.json();
      alert(result.message);
    } catch (e) {
      // handle your error
    }
  };

  return (
    <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack paddingBlockEnd={1}>
        <InputLabel htmlFor='field-about'>About</InputLabel>
        <TextArea rows={2} name='about' id='field-about' max={200} margin={'dense'} fullWidth />
        <FormHelperText>{errors.about?.message?.toString() || ' '}</FormHelperText>
      </Stack>
    </form>
  );
}
