import { useFormContext } from 'react-hook-form';
import { TextInput } from '@/components/Form';
import { GENDERS } from '@/types';
import { MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { incrementStep } from '@/store/form.slice';
import s from './FormSteps.module.scss';

export function FirstForm({ id }: { id: string }) {
  const methods = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form className={s.form} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <label className={s.label}>
        NickName
        <TextInput name={'nickname'} id={'user-nickname'} placeholder={'Enter nickname'} />
      </label>
      <label className={s.label}>
        Name
        <TextInput name={'name'} id={'user-name'} placeholder={'Enter name'} />
      </label>
      <label className={s.label}>
        Surname
        <TextInput name={'surname'} id={'user-surname'} placeholder={'Enter surname'} />
      </label>
      <label className={s.label}>
        Sex
        <TextInput name={'sex'} id={'field-sex'} select>
          {GENDERS.map((item, i) => (
            <MenuItem key={i} value={item} id={`field-sex-option-${item}`}>
              {`${item[0].toUpperCase()}${item.substring(1)}`}
            </MenuItem>
          ))}
        </TextInput>
      </label>
    </form>
  );
}