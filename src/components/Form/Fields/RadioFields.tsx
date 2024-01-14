import { FormHelperText, InputLabel, Stack } from '@mui/material';

import { RadioBox } from '@/components/Form';

export function RadioFields({ errorMessage }: { errorMessage?: string }) {
  return (
    <div>
      <InputLabel>Radio group</InputLabel>
      <Stack gap={{ xs: 1, md: 0 }} marginBlockStart={{ xs: 2, md: 0 }}>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((option, index) => (
          <RadioBox
            key={index}
            name={'radio'}
            label={option}
            value={option}
            id={`field-radio-group-option-${index + 1}`}
          />
        ))}
      </Stack>
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </div>
  );
}
