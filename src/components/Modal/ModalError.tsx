import CloseIco from '@/assets/icos/close.svg?react';
import { Button, Stack, Typography } from '@mui/material';

import { Dialog, Mark } from '.';

export function ModalError({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={handleClick}>
      <Stack alignItems={'center'} gap={3}>
        <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'} width={'100%'}>
          <Typography variant='h6' component={'p'}>
            Ошибка
          </Typography>
          <Button
            variant={'contained'}
            size={'small'}
            color={'secondary'}
            onClick={handleClick}
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
        <Button variant={'contained'} size={'large'} onClick={handleClick}>
          Закрыть
        </Button>
      </Stack>
    </Dialog>
  );
}
