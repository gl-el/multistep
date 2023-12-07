import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router';

import { Stepper } from '@/components/Stepper';
import { decrementStep, resetStep } from '@/store/form.slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import s from './CreatePage.module.scss';
import { FirstForm, SecondForm, ThirdForm } from './FormSteps';

const MAX_STEPS = 3;

export function CreatePage() {
  const { step } = useAppSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBack = () => {
    if (step) {
      dispatch(decrementStep());
    } else {
      dispatch(resetStep());
      navigate('/');
    }
  };

  return (
    <div className={s.wrapper}>
      <Stepper max={MAX_STEPS} current={step} className={s.stepper} />
      {step === 1 && <FirstForm id={`form-step-${step}`} />}
      {step === 2 && <SecondForm id={`form-step-${step}`} />}
      {step === 3 && <ThirdForm id={`form-step-${step}`} />}
      <Stack direction={'row'} justifyContent={'space-between'} marginBlockStart={{ xs: 0, md: 8 }}>
        <Button variant={'outlined'} size={'large'} onClick={handleBack}>
          Назад
        </Button>
        <Button variant={'contained'} type={'submit'} size={'large'} form={`form-step-${step}`}>
          {step < 3 ? 'Далее' : 'Отправить'}
        </Button>
      </Stack>
    </div>
  );
}
