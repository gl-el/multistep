import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/components/routing';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/utils/schema';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function App() {
  const { step } = useSelector((state: RootState) => state.form);
  const methods = useForm({
    resolver: yupResolver(schema[step]),
  });
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FormProvider>
  );
}
