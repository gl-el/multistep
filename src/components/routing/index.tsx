import { CreatePage, ErrorPage, MainPage } from '@/pages';
import { Route, Routes } from 'react-router-dom';

import { RootLayout } from '@/components/layouts/RootLayout';

import { PrivateRoute } from './PrivateRoute';

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path='/create'
          element={
            <PrivateRoute>
              <CreatePage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
