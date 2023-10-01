import { Stepper } from "@components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { FirstStep } from "./FirstStep";
import s from "./CreatePage.module.scss";

export function CreatePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { step } = useSelector((state: RootState) => state.form);
  return (
    <div className={s.wrapper}>
      <Stepper min={1} max={3} current={step} />
      {step === 1 && <FirstStep />}
    </div>
  );
}
