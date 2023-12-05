import { useFormContext } from 'react-hook-form';
import { TextArea } from '@/components/Form';
import { FormHelperText, InputLabel, Stack } from '@mui/material';
import { FormValues } from '@/types';

export function ThirdForm({ id }: { id: string }) {
  const methods = useFormContext<FormValues>();
  const errors = methods.formState.errors;

  const onSubmit = async () => {
    const { phone, advantages, ...rest } = methods.getValues();
    const formatAdvantages = advantages.map((item) => item.advantage);
    const formatPhone = phone.replaceAll(/\D+/g, '');
    try {
      const res = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ formatAdvantages, formatPhone, ...rest }),
      });
      if (!res.ok) throw new Error('Error occurred during submitting');
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
