import { useFormContext } from 'react-hook-form';
import { TextInput } from '@/components/Form';
import { GENDERS } from '@/types';
import { Grid, InputLabel, MenuItem } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { incrementStep } from '@/store/form.slice';
import s from './FormSteps.module.scss';

export function FirstForm({ id }: { id: string }) {
  const methods = useFormContext();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form className={s.form} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <Grid container spacing={2} direction={'column'} marginBlockEnd={2}>
        <Grid container item direction={'column'} md={6} xs={12}>
          <InputLabel htmlFor='field-nickname'>NickName</InputLabel>
          <TextInput
            name={'nickname'}
            size={'small'}
            id={'field-nickname'}
            placeholder={'Enter nickname'}
            margin={'dense'}
            style={{ maxWidth: 300 }}
          />
        </Grid>
        <Grid container item direction={'column'} md={6} xs={12}>
          <InputLabel htmlFor='field-name'>Name</InputLabel>
          <TextInput
            name={'name'}
            size={'small'}
            id={'field-name'}
            placeholder={'Enter name'}
            margin={'dense'}
            style={{ maxWidth: 300 }}
          />
        </Grid>
        <Grid container item direction={'column'} md={6} xs={12}>
          <InputLabel htmlFor='field-surname'>Surname</InputLabel>
          <TextInput
            name={'surname'}
            size={'small'}
            id={'field-surname'}
            placeholder={'Enter surname'}
            margin={'dense'}
            style={{ maxWidth: 300 }}
          />
        </Grid>
        <Grid container item direction={'column'} md={6} xs={12}>
          <InputLabel htmlFor='field-sex'>Sex</InputLabel>
          <TextInput name={'sex'} size={'small'} id={'field-sex'} margin={'dense'} style={{ maxWidth: 300 }} select>
            {GENDERS.map((item, i) => (
              <MenuItem key={i} value={item} id={`field-sex-option-${item}`}>
                {`${item[0].toUpperCase()}${item.substring(1)}`}
              </MenuItem>
            ))}
          </TextInput>
        </Grid>
      </Grid>
    </form>
  );
}
