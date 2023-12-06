import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Stack gap={{ xs: 5, md: 2 }} margin={2} padding={4}>
      <Typography variant={'h5'} component={'p'} textAlign={'center'}>
        Здесь ничего нет
      </Typography>
      <Button variant={'contained'} onClick={() => navigate(-1)}>
        Вернуться назад
      </Button>
    </Stack>
  );
}
