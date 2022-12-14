import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useAuthStore';

// TODO:Una ves se tengan las vistas de movil poner imagen y link de descarga para apk. Probablemente para el final del proyecto
export const MovileScreen: React.FunctionComponent = () => {
  const { status } = useAuthStore();

  const navigate = useNavigate();
  
  useEffect(() => {
    if (status === 'Authenticated') {
      navigate('/auth/inicio', { replace: true });
    }
    // eslint-disable-next-line 
  }, [status]);
  return <div>MovileScreen</div>;
  // img, <a href="link/to/your/download/file" download="filename">Download link</a> y poco mas
};
