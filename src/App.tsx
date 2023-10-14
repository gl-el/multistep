import { BrowserRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { schema } from '@/utils/schema';
import { AppRouter } from '@/components/routing';
import { FormMain, FormCreateFirst } from './types';

export function App() {
  const { step } = useSelector((state: RootState) => state.form);
  const methods = useForm({
    resolver: yupResolver<FormMain | FormCreateFirst>(schema[step]),
  });
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FormProvider>
  );
}
