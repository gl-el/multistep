import { Avatar } from '@/components/Avatar';
import { MaskedInput, TextInput } from '@/components/Form';
import s from './MainPage.module.scss';
import { Divider, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export function MainPage() {
  const methods = useFormContext();

  const onSubmit = (data) => console.log(data);

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
