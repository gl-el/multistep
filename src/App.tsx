import { FormCreateFirst, FormCreateSecond, FormCreateThird, FormMain } from '@/types';
import { schema } from '@/utils/schema';
import { ThemeProvider } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '@/components/routing';
import { themeOptions } from '@/components/theme';
import { useAppSelector } from '@/store/hooks';

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
