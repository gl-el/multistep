import { FormHelperText, Grid, InputLabel } from '@mui/material';

import { TextInput } from '@/components/Form';

export function NicknameField({ errorMessage }: { errorMessage?: string }) {
  return (
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
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
