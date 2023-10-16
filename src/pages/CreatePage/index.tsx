import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrementStep, resetStep } from '@/store/form.slice';
import { useNavigate } from 'react-router';
import { useFormContext } from 'react-hook-form';
import { FirstForm, SecondForm } from './FormSteps';

import s from './CreatePage.module.scss';

const MAX_STEPS = 3;
const steps = Array.from({ length: MAX_STEPS }, (_, index) => index + 1);

export function CreatePage() {
  const { step } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const methods = useFormContext();

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
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step === 1 && <FirstForm id={`form-step-${step}`} />}
      {step === 2 && <SecondForm id={`form-step-${step}`} />}
      <div className={s.btnWrapper}>
        <Button variant={'outlined'} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant={'contained'}
          type={'submit'}
          form={`form-step-${step}`}
          onClick={() => {
            console.log(methods.getValues());
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
