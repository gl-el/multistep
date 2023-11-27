import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const step = useAppSelector((state) => state.form.step);

  useEffect(() => {
    if (step) {
      navigate('/create', { replace: true });
    }
  }, [step, navigate]);

  if (!step) {
    return <Navigate to='/' replace />;
  }

  return children;
}
