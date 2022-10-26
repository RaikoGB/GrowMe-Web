import { useDispatch, useSelector } from 'react-redux';
import { growApi } from '../../Services/Api';
import { onChecking, onLogin, onLogout } from '../../Store/auth/AuthSlice';

// todo:Definir el tipo de retorno de esta funcion, los any deberian cambiarse a su retorno correcto
export const useAuthStore: any = () => {
  const { status, user, errorMessage } = useSelector(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const startLogin = async (email: string, password: string): Promise<void> => {
    dispatch(onChecking());
    console.log({ email, password });
    try {
      const resp = await growApi.post('users/login', { email, password });
      console.log({ resp });
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: resp.data.name, id: resp.data.id }));
    } catch (error) {
      console.log({ error });
      dispatch(onLogout('Credenciales incorrectas'));
    }
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    //   checkAuthToken,
    startLogin
  };
};
