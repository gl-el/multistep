import { FormHelperText, InputLabel, Stack } from '@mui/material';

import { TextArea } from '@/components/Form';

export function AboutField({ errorMessage }: { errorMessage?: string }) {
  return (
    <Stack paddingBlockEnd={1}>
      <InputLabel htmlFor='field-about'>About</InputLabel>
      <TextArea rows={2} name='about' id='field-about' max={200} margin={'dense'} fullWidth />
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Stack>
  );
}
