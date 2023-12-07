import { Button, Stack, Typography } from '@mui/material';

import { Dialog, Mark } from '.';

export function ModalSuccess({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={handleClick}>
      <Stack alignItems={'center'} gap={3}>
        <Typography variant='h6' component={'p'}>
          Форма успешно отправлена
        </Typography>
        <Mark status='success' />
        <Button variant={'contained'} size={'large'} onClick={handleClick}>
          На главную
        </Button>
      </Stack>
    </Dialog>
  );
}
