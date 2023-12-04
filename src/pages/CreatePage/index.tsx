import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { decrementStep, resetStep } from '@/store/form.slice';
import { useNavigate } from 'react-router';
import { FirstForm, SecondForm, ThirdForm } from './FormSteps';

import s from './CreatePage.module.scss';
import { Stepper } from '@/components/Stepper';

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
      <div className={s.btnWrapper}>
        <Button variant={'outlined'} size={'large'} onClick={handleBack}>
          Назад
        </Button>
        <Button variant={'contained'} type={'submit'} size={'large'} form={`form-step-${step}`}>
          Далее
        </Button>
      </div>
    </div>
  );
}
