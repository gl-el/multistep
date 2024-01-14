import IconAdd from '@/assets/icons/add.svg?react';
import IconDelete from '@/assets/icons/delete.svg?react';
import { Button, FormHelperText, InputLabel, Stack } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { TextInput } from '@/components/Form';

export function AdvantagesFields({ errorMessage }: { errorMessage?: string }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages',
  });

  return (
    <>
      <InputLabel>Advantages</InputLabel>
      {fields.map((field, index) => (
        <Stack
          key={field.id}
          direction={'row'}
          spacing={1}
          marginBlockStart={1}
          marginBlockEnd={2}
          alignItems={'center'}
        >
          <TextInput
            fullWidth
            name={`advantages[${index}].advantage`}
            id={`field-advantages-${index + 1}`}
            placeholder={'Enter advantage'}
            margin={'dense'}
            sx={{ maxWidth: 300 }}
          />
          <Button
            id={`button-remove-${index + 1}`}
            type={'button'}
            onClick={() => {
              if (fields.length === 1) return;
              return remove(index);
            }}
            sx={{ aspectRatio: '1/1', minWidth: 20 }}
          >
            <IconDelete />
          </Button>
        </Stack>
      ))}
      <Button
        id='button-add'
        onClick={() => append({ advantage: '' })}
        variant={'outlined'}
        type={'button'}
        size={'small'}
        sx={{ aspectRatio: '1/1', minWidth: 44 }}
      >
        <IconAdd />
      </Button>
      <FormHelperText>{errorMessage || ' '}</FormHelperText>
    </>
  );
}
