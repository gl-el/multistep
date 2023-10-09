import s from './CreatePage.module.scss';
import { Step, StepLabel, Stepper } from '@mui/material';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

const MAX_STEPS = 3;

export function CreatePage() {
  const { step } = useSelector((state: RootState) => state.form);
  const steps = Array.from({ length: MAX_STEPS }, (_, index) => index + 1);
  return (
    <div className={s.wrapper}>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
