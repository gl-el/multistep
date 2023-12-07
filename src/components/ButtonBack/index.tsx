import { Button, ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ButtonBack({ ...props }: { props?: ButtonProps }) {
  const navigate = useNavigate();
  return (
    <Button variant={'contained'} onClick={() => navigate(-1)} {...props}>
      Вернуться назад
    </Button>
  );
}
