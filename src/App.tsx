import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/components/routing';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './utils/schema.validation';

export function App() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FormProvider>
  );
}
