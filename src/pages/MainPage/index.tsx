import { Button, Divider, FormHelperText, Grid, InputLabel } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@/components/Avatar';
import { MaskedInput, TextInput } from '@/components/Form';
import { setStep } from '@/store/form.slice';
import { useAppDispatch } from '@/store/hooks';

import s from './MainPage.module.scss';

export function MainPage() {
  const navigate = useNavigate();
  const methods = useFormContext();
  const errors = methods.formState.errors;
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(setStep(1));
    navigate('/create');
  };

  return (
    <div className={s.wrapper}>
      <Avatar />
      <Divider />
      <form className={s.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={3} direction={'column'} marginBlockEnd={2}>
          <Grid container item direction={'column'} md={6} xs={12}>
            <InputLabel htmlFor='user-phone'>Номер телефона</InputLabel>
            <MaskedInput style={{ maxWidth: 400 }} size={'small'} name={'phone'} id={'user-phone'} margin={'dense'} />
            <FormHelperText>{errors.phone?.message?.toString() || ' '}</FormHelperText>
          </Grid>
          <Grid container item direction={'column'} md={6} xs={12}>
            <InputLabel htmlFor='user-email'>Email</InputLabel>
            <TextInput style={{ maxWidth: 400 }} size={'small'} name={'email'} id={'user-email'} margin={'dense'} />
            <FormHelperText>{errors.email?.message?.toString() || ' '}</FormHelperText>
          </Grid>
        </Grid>
        <Button variant={'contained'} type={'submit'} size={'large'}>
          Начать
        </Button>
      </form>
    </div>
  );
}
