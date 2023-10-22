import { BrowserRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { schema } from '@/utils/schema';
import { AppRouter } from '@/components/routing';
import { FormMain, FormCreateFirst, FormCreateSecond, FormCreateThird } from './types';

export function App() {
  const { step } = useSelector((state: RootState) => state.form);
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
  const methods = useForm({
    resolver: yupResolver<FormMain | FormCreateFirst | FormCreateSecond | FormCreateThird>(schema[step]),
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FormProvider>
  );
}
