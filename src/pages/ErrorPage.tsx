import { ButtonBack } from '@/components/ButtonBack';
import { Stack, Typography } from '@mui/material';

export function ErrorPage() {
  return (
    <Stack gap={{ xs: 5, md: 2 }} margin={2} padding={4}>
      <Typography variant={'h5'} component={'p'} textAlign={'center'}>
        Здесь ничего нет
      </Typography>
      <ButtonBack />
    </Stack>
  );
}
