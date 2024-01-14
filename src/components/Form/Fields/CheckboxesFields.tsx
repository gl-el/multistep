import { FormHelperText, InputLabel, Stack } from '@mui/material';

import { CheckBox } from '@/components/Form';

export function CheckboxesFields({ errorMessage }: { errorMessage?: string }) {
  return (
    <div>
      <InputLabel>Checkbox group</InputLabel>
      <Stack gap={{ xs: 1, md: 0 }} marginBlockStart={{ xs: 2, md: 0 }}>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((option, index) => (
          <CheckBox
            key={index}
            name={'checkbox'}
            label={option}
            value={option}
            id={`field-checkbox-group-option-${index + 1}`}
          />
        ))}
      </Stack>
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </div>
  );
}
