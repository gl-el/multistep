import { Avatar } from '@/components/Avatar';
import { MaskedInput, TextInput } from '@/components/Form';
import s from './MainPage.module.scss';
import { Divider, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { setStep } from '@/store/form.slice';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();
  const methods = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    dispatch(setStep(1));
    navigate('/create');
  };

  return (
    <div className={s.wrapper}>
      <Avatar />
      <Divider />
      <form className={s.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <label className={s.label}>
          Phone number
          <MaskedInput name={'phone'} />
        </label>
        <label className={s.label}>
          Email
          <TextInput name={'email'} />
        </label>
        <Button variant={'outlined'} type={'submit'}>
          Start
        </Button>
      </form>
    </div>
  );
}
