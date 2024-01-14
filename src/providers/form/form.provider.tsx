import { FormCreateFirst, FormCreateSecond, FormCreateThird, FormMain } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider as RHFProvider, useForm } from 'react-hook-form';

import { useAppSelector } from '@/store/hooks';

import { schema } from './form.schema';

const defaultValues = {
  phone: '',
  email: '',
  nickname: '',
  name: '',
  surname: '',
  sex: '',
  advantages: [{ advantage: '' }, { advantage: '' }, { advantage: '' }],
  checkbox: [],
  about: '',
};
export function FormProvider({ children }: { children: React.ReactNode }) {
  const { step } = useAppSelector((state) => state.form);
  const methods = useForm<FormMain | FormCreateFirst | FormCreateSecond | FormCreateThird>({
    resolver: yupResolver<FormMain | FormCreateFirst | FormCreateSecond | FormCreateThird>(schema[step]),
    defaultValues: defaultValues,
  });
  return <RHFProvider {...methods}>{children}</RHFProvider>;
}
