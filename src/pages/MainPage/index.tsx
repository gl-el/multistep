import { Button, Divider, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@/components/Avatar';
import { EmailField, PhoneNumberField } from '@/components/Form/Fields';
import { setStep } from '@/store/form.slice';
import { useAppDispatch } from '@/store/hooks';

import s from './MainPage.module.scss';

export function MainPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(setStep(1));
    navigate('/create');
  };

  return (
    <div className={s.wrapper}>
      <Avatar />
      <Divider />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} direction={'column'} marginBlockEnd={2}>
          <PhoneNumberField errorMessage={errors.phone?.message?.toString()} />
          <EmailField errorMessage={errors.email?.message?.toString()} />
        </Grid>
        <Button variant={'contained'} type={'submit'} size={'large'}>
          Начать
        </Button>
      </form>
    </div>
  );
}
