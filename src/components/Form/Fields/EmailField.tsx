import { FormHelperText, Grid, InputLabel } from '@mui/material';

import { TextInput } from '@/components/Form';

export function EmailField({ errorMessage }: { errorMessage?: string }) {
  return (
    <Grid container item direction={'column'} md={6} xs={12}>
      <InputLabel htmlFor='user-email'>Email</InputLabel>
      <TextInput style={{ maxWidth: 400 }} size={'small'} name={'email'} id={'user-email'} margin={'dense'} />
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
