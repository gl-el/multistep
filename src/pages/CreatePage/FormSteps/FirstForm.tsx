import { useFormContext } from 'react-hook-form';
import { FormHelperText, Grid, InputLabel, MenuItem } from '@mui/material';
import { GENDERS } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { incrementStep } from '@/store/form.slice';
import { TextInput } from '@/components/Form';

export function FirstForm({ id }: { id: string }) {
  const methods = useFormContext();
  const errors = methods.formState.errors;
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <Grid container spacing={3} direction={'column'} marginBlockEnd={2}>
        <Grid container item direction={'column'}>
          <InputLabel htmlFor='field-nickname'>NickName</InputLabel>
          <TextInput
            name={'nickname'}
            size={'small'}
            id={'field-nickname'}
            placeholder={'Enter nickname'}
            margin={'dense'}
            sx={{ maxWidth: 300 }}
          />
          <FormHelperText>{errors.nickname?.message?.toString() || ' '}</FormHelperText>
        </Grid>
        <Grid container item direction={'column'}>
          <InputLabel htmlFor='field-name'>Name</InputLabel>
          <TextInput
            name={'name'}
            size={'small'}
            id={'field-name'}
            placeholder={'Enter name'}
            margin={'dense'}
            sx={{ maxWidth: 300 }}
          />
          <FormHelperText>{errors.name?.message?.toString() || ' '}</FormHelperText>
        </Grid>
        <Grid container item direction={'column'}>
          <InputLabel htmlFor='field-surname'>Surname</InputLabel>
          <TextInput
            name={'surname'}
            size={'small'}
            id={'field-surname'}
            placeholder={'Enter surname'}
            margin={'dense'}
            sx={{ maxWidth: 300 }}
          />
          <FormHelperText>{errors.surname?.message?.toString() || ' '}</FormHelperText>
        </Grid>
        <Grid container item direction={'column'}>
          <InputLabel htmlFor='field-sex'>Sex</InputLabel>
          <TextInput name={'sex'} size={'small'} id={'field-sex'} margin={'dense'} style={{ maxWidth: 300 }} select>
            {GENDERS.map((item, i) => (
              <MenuItem key={i} value={item} id={`field-sex-option-${item}`}>
                {`${item[0].toUpperCase()}${item.substring(1)}`}
              </MenuItem>
            ))}
          </TextInput>
          <FormHelperText>{`${errors.sex?.message || ' '}`}</FormHelperText>
        </Grid>
      </Grid>
    </form>
  );
}
