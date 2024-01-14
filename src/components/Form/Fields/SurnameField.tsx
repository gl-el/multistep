import { FormHelperText, Grid, InputLabel } from '@mui/material';

import { TextInput } from '@/components/Form';

export function SurnameField({ errorMessage }: { errorMessage?: string }) {
  return (
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
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
