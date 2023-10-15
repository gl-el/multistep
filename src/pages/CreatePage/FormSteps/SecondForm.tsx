import { useFormContext, useFieldArray } from 'react-hook-form';
import { TextInput } from '@/components/Form';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { incrementStep } from '@/store/form.slice';
import IcoDelete from '@/assets/icos/delete.svg?react';
import IcoAdd from '@/assets/icos/add.svg?react';
import s from './FormSteps.module.scss';

export function SecondForm({ id }: { id: string }) {
  const methods = useFormContext();
  const dispatch = useDispatch<AppDispatch>();
  const control = methods.control;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages',
  });

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form className={s.form} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <div className={s.advantages}>
        Advantages
        <ul className={s.advantagesList}>
          {fields.map((field, index) => (
            <li key={field.id} className={s.advantage}>
              <TextInput
                name={`advantages[${index}].advantage`}
                id={`field-advantages-${index}`}
                placeholder={'Enter advantage'}
              />
              <Button className={s.btnDel} onClick={() => remove(index)}>
                <IcoDelete />
              </Button>
            </li>
          ))}
        </ul>
        {methods.formState.errors.advantages && <div>{methods.formState.errors.advantages?.message?.toString()}</div>}
        <Button className={s.btnAdd} onClick={() => append({ advantage: '' })} variant={'outlined'}>
          <IcoAdd />
        </Button>
      </div>
    </form>
  );
}
