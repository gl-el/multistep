import { useFormContext } from 'react-hook-form';

import { AdvantagesFields, CheckboxesFields, RadioFields } from '@/components/Form/Fields';
import { incrementStep } from '@/store/form.slice';
import { useAppDispatch } from '@/store/hooks';

export function SecondForm({ id }: { id: string }) {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={id}>
      <AdvantagesFields errorMessage={errors.advantages?.message?.toString()} />
      <CheckboxesFields errorMessage={errors.checkbox?.message?.toString()} />
      <RadioFields errorMessage={errors.radio?.message?.toString()} />
    </form>
  );
}
