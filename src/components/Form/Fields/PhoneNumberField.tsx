import { FormHelperText, Grid, InputLabel } from '@mui/material';

import { MaskedInput } from '@/components/Form';

export function PhoneNumberField({ errorMessage }: { errorMessage?: string }) {
  return (
    <Grid container item direction={'column'} md={6} xs={12}>
      <InputLabel htmlFor='user-phone'>Номер телефона</InputLabel>
      <MaskedInput style={{ maxWidth: 400 }} size={'small'} name={'phone'} id={'user-phone'} margin={'dense'} />
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
