import { GENDERS } from '@/types';
import { FormHelperText, Grid, InputLabel, MenuItem } from '@mui/material';

import { TextInput } from '@/components/Form';

export function SexField({ errorMessage }: { errorMessage?: string }) {
  return (
    <Grid container item direction={'column'}>
      <InputLabel htmlFor='field-sex'>Sex</InputLabel>
      <TextInput name={'sex'} size={'small'} id={'field-sex'} margin={'dense'} style={{ maxWidth: 300 }} select>
        {GENDERS.map((item, i) => (
          <MenuItem key={i} value={item} id={`field-sex-option-${item}`}>
            {`${item[0].toUpperCase()}${item.substring(1)}`}
          </MenuItem>
        ))}
      </TextInput>
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </Grid>
  );
}
