import { Backdrop, CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RootLayout } from '@/components/layouts/RootLayout';

import { PrivateRoute } from './PrivateRoute';

const MainPage = lazy(() => import('@/pages/MainPage').then((module) => ({ default: module.MainPage })));
const CreatePage = lazy(() => import('@/pages/CreatePage').then((module) => ({ default: module.CreatePage })));
const ErrorPage = lazy(() => import('@/pages/ErrorPage').then((module) => ({ default: module.ErrorPage })));

export function AppRouter() {
  return (
    <Suspense
      fallback={
        <Backdrop invisible open>
          <CircularProgress color='primary' />
        </Backdrop>
      }
    >
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
    </Suspense>
  );
}
