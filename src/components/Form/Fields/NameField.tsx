import { FormHelperText, Grid, InputLabel } from '@mui/material';

import { TextInput } from '@/components/Form';

export function NameField({ errorMessage }: { errorMessage?: string }) {
  return (
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
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
