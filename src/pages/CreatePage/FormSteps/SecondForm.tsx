import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button, FormHelperText, InputLabel, Stack } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { incrementStep } from '@/store/form.slice';
import { TextInput } from '@/components/Form';
import { CheckBox } from '@/components/Form';
import { RadioBox } from '@/components/Form';
import IcoDelete from '@/assets/icos/delete.svg?react';
import IcoAdd from '@/assets/icos/add.svg?react';

export function SecondForm({ id }: { id: string }) {
  const methods = useFormContext();
  const control = methods.control;
  const errors = methods.formState.errors;
  const dispatch = useAppDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages',
  });

  const onSubmit = () => {
    dispatch(incrementStep());
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      <InputLabel>Advantages</InputLabel>
      {fields.map((_, index) => (
        <Stack key={index} direction={'row'} spacing={1} marginBlockStart={1} marginBlockEnd={2} alignItems={'center'}>
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
            onClick={() => remove(index)}
            sx={{ aspectRatio: '1/1', minWidth: 20 }}
          >
            <IcoDelete />
          </Button>
        </Stack>
      ))}
      <Button
        id='button-add'
        onClick={() => append({ advantage: '' })}
        variant={'outlined'}
        size={'small'}
        sx={{ aspectRatio: '1/1', minWidth: 44 }}
      >
        <IcoAdd />
      </Button>
      <FormHelperText>{errors.advantages?.message?.toString() || ' '}</FormHelperText>
      <div>
        <InputLabel>Checkbox group</InputLabel>
        <Stack>
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
        <FormHelperText>{errors.checkbox?.message?.toString() || ' '}</FormHelperText>
      </div>
      <div>
        <InputLabel>Radio group</InputLabel>
        <Stack>
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
        <FormHelperText>{errors.radio?.message?.toString() || ' '}</FormHelperText>
      </div>
    </form>
  );
}
