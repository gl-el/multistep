import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const step = useSelector((state: RootState) => state.form.step);

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
