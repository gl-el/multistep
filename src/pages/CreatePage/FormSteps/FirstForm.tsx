import { Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { NameField, NicknameField, SexField, SurnameField } from '@/components/Form/Fields';
import { incrementStep } from '@/store/form.slice';
import { useAppDispatch } from '@/store/hooks';

export function FirstForm({ id }: { id: string }) {
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
      <Grid container spacing={{ xs: 1, md: 3 }} direction={'column'} marginBlockEnd={2}>
        <NicknameField errorMessage={errors.nickname?.message?.toString()} />
        <NameField errorMessage={errors.name?.message?.toString()} />
        <SurnameField errorMessage={errors.surname?.message?.toString()} />
        <SexField errorMessage={errors.sex?.message?.toString()} />
      </Grid>
    </form>
  );
}
