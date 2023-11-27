import { Avatar } from '@/components/Avatar';
import { MaskedInput, TextInput } from '@/components/Form';
import s from './MainPage.module.scss';
import { Divider, Button, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import { setStep } from '@/store/form.slice';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();
  const methods = useFormContext();
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
        <Grid container spacing={3} direction={'column'}>
          <Grid container item direction={'column'} md={6} xs={12}>
            <label htmlFor='user-phone' className={s.label}>
              Phone number
            </label>
            <MaskedInput style={{ maxWidth: 400 }} name={'phone'} id={'user-phone'} margin={'dense'} />
          </Grid>
          <Grid container item direction={'column'} md={6} xs={12}>
            <label className={s.label} htmlFor='user-email'>
              Email
            </label>
            <TextInput style={{ maxWidth: 400 }} name={'email'} id={'user-email'} margin={'dense'} />
          </Grid>
          <Grid item xs={12}>
            <Button variant={'outlined'} type={'submit'}>
              Start
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
