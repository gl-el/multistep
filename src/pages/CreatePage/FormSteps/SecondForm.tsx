import cx from 'clsx';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { TextInput } from '@/components/Form';
import { Button, Checkbox, FormControlLabel, FormHelperText, Radio } from '@mui/material';
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
                id={`field-advantages-${index + 1}`}
                placeholder={'Enter advantage'}
                margin={'dense'}
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
      <div className={cx(s.label, s.group)}>
        Checkbox group
        {Array.from({ length: 3 }, (_, i) => i + 1).map((option, index) => (
          <Controller
            key={index}
            name='checkbox'
            control={methods.control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                label={option}
                control={
                  <Checkbox
                    id={`field-checkbox-group-option-${index + 1}`}
                    checked={field.value.includes(option)}
                    onChange={() => {
                      if (!field.value.includes(option)) {
                        field.onChange([...field.value, option]);
                        return;
                      }
                      const newOption = field.value.filter((item: unknown) => item !== option);
                      field.onChange(newOption);
                    }}
                  />
                }
              />
            )}
          />
        ))}
        <FormHelperText>{methods.formState.errors.checkbox?.message?.toString()}</FormHelperText>
      </div>
      <div className={cx(s.label, s.group)}>
        Radio group
        {Array.from({ length: 3 }, (_, i) => i + 1).map((option, index) => (
          <Controller
            key={index}
            name='radio'
            control={methods.control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                label={option}
                control={
                  <Radio
                    id={`field-radio-group-option-${index + 1}`}
                    checked={field.value === option}
                    onChange={() => {
                      field.onChange(option);
                    }}
                  />
                }
              />
            )}
          />
        ))}
        <FormHelperText>{methods.formState.errors.radio?.message?.toString()}</FormHelperText>
      </div>
    </form>
  );
}
