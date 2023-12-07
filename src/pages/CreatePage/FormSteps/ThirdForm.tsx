import { useFormContext } from 'react-hook-form';
import { TextArea } from '@/components/Form';
import { FormHelperText, InputLabel, Stack } from '@mui/material';
import { FormValues } from '@/types';
import { ModalError, ModalSuccess } from '@/components/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormSubmit } from '@/hooks/useFormSubmit';

export function ThirdForm({ id }: { id: string }) {
  const methods = useFormContext<FormValues>();
  const errors = methods.formState.errors;
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { submitStatus, onSubmit } = useFormSubmit(() => setIsDialogOpen(true));

  const prepareFormData = () => {
    const { phone, advantages, ...rest } = methods.getValues();
    const formatAdvantages = advantages.map((item) => item.advantage);
    const formatPhone = phone.replaceAll(/\D+/g, '');
    return { advantages: formatAdvantages, phone: formatPhone, ...rest };
  };

  return (
    <>
      <form
        id={id}
        onSubmit={methods.handleSubmit(() => {
          const data = prepareFormData();
          onSubmit(data);
        })}
      >
        <Stack paddingBlockEnd={1}>
          <InputLabel htmlFor='field-about'>About</InputLabel>
          <TextArea rows={2} name='about' id='field-about' max={200} margin={'dense'} fullWidth />
          <FormHelperText>{errors.about?.message?.toString() || ' '}</FormHelperText>
        </Stack>
      </form>
      {submitStatus === 'success' ? (
        <ModalSuccess
          isOpen={isDialogOpen}
          handleClick={() => {
            navigate('/');
            setIsDialogOpen(false);
          }}
        />
      ) : (
        <ModalError isOpen={isDialogOpen} handleClick={() => setIsDialogOpen(false)} />
      )}
    </>
  );
}
