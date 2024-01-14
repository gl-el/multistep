import { FormValues } from '@/types';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AboutField } from '@/components/Form/Fields';
import { ModalError, ModalSuccess } from '@/components/Modal';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { resetStep } from '@/store/form.slice.ts';
import { useAppDispatch } from '@/store/hooks.ts';

export function ThirdForm({ id }: { id: string }) {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useFormContext<FormValues>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { submitStatus, onSubmit } = useFormSubmit(() => setIsDialogOpen(true));

  const prepareFormData = () => {
    const { phone, advantages, ...rest } = getValues();
    const formatAdvantages = advantages.map((item) => item.advantage);
    const formatPhone = phone.replaceAll(/\D+/g, '');
    return { advantages: formatAdvantages, phone: formatPhone, ...rest };
  };

  return (
    <>
      <form
        id={id}
        onSubmit={handleSubmit(() => {
          const data = prepareFormData();
          onSubmit(data);
        })}
      >
        <AboutField errorMessage={errors.about?.message?.toString()} />
      </form>
      {submitStatus === 'success' ? (
        <ModalSuccess
          isOpen={isDialogOpen}
          handleClick={() => {
            navigate('/');
            setIsDialogOpen(false);
            reset({}, { keepDefaultValues: true });
            dispatch(resetStep());
          }}
        />
      ) : (
        <ModalError isOpen={isDialogOpen} handleClick={() => setIsDialogOpen(false)} />
      )}
    </>
  );
}
