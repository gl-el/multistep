import { useFormContext } from 'react-hook-form';
import { TextArea } from '@/components/Form';
import { Button, FormHelperText, InputLabel, Stack, Typography } from '@mui/material';
import { FormValues } from '@/types';
import { Dialog, Mark } from '@/components/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIco from '@/assets/icos/close.svg?react';

export function ThirdForm({ id }: { id: string }) {
  const methods = useFormContext<FormValues>();
  const errors = methods.formState.errors;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  const onSubmit = async () => {
    const { phone, advantages, ...rest } = methods.getValues();
    const formatAdvantages = advantages.map((item) => item.advantage);
    const formatPhone = phone.replaceAll(/\D+/g, '');
    try {
      const res = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ advantages: formatAdvantages, phone: formatPhone, ...rest }),
      });
      if (!res.ok) throw new Error('Error occurred during submitting');
      setSubmitStatus('success');
    } catch (e) {
      setSubmitStatus('error');
    } finally {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack paddingBlockEnd={1}>
          <InputLabel htmlFor='field-about'>About</InputLabel>
          <TextArea rows={2} name='about' id='field-about' max={200} margin={'dense'} fullWidth />
          <FormHelperText>{errors.about?.message?.toString() || ' '}</FormHelperText>
        </Stack>
      </form>
      {submitStatus === 'success' ? (
        <Dialog
          isOpen={isDialogOpen}
          onClose={() => {
            navigate('/');
            setIsDialogOpen(false);
          }}
        >
          <Stack alignItems={'center'} gap={3}>
            <Typography variant='h6' component={'p'}>
              Форма успешно отправлена
            </Typography>
            <Mark status='success' />
            <Button
              variant={'contained'}
              size={'large'}
              onClick={() => {
                navigate('/');
                setIsDialogOpen(false);
              }}
            >
              На главную
            </Button>
          </Stack>
        </Dialog>
      ) : (
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <Stack alignItems={'center'} gap={3}>
            <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'} width={'100%'}>
              <Typography variant='h6' component={'p'}>
                Ошибка
              </Typography>
              <Button
                variant={'contained'}
                size={'small'}
                color={'secondary'}
                onClick={() => setIsDialogOpen(false)}
                sx={{
                  minWidth: '28px',
                  padding: '4px',
                  borderRadius: '50%',
                }}
              >
                <CloseIco />
              </Button>
            </Stack>
            <Mark status='error' />
            <Button variant={'contained'} size={'large'} onClick={() => setIsDialogOpen(false)}>
              Закрыть
            </Button>
          </Stack>
        </Dialog>
      )}
    </>
  );
}
