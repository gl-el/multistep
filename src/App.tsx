import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '@/pages/routing';
import { FormProvider } from '@/providers/form/form.provider';
import { themeOptions } from '@/theme/theme';

export function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <FormProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </FormProvider>
    </ThemeProvider>
  );
}
