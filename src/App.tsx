import { BrowserRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from './store/hooks';
import { schema } from '@/utils/schema';
import { AppRouter } from '@/components/routing';
import { FormMain, FormCreateFirst, FormCreateSecond, FormCreateThird } from './types';
import { ThemeProvider } from '@emotion/react';
import { themeOptions } from './components/theme';

export function App() {
  const { step } = useAppSelector((state) => state.form);
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
  const methods = useForm<FormMain | FormCreateFirst | FormCreateSecond | FormCreateThird>({
    resolver: yupResolver<FormMain | FormCreateFirst | FormCreateSecond | FormCreateThird>(schema[step]),
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={themeOptions}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </FormProvider>
  );
}
