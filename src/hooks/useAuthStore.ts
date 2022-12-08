import { useDispatch, useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import { onLogin, onLogout } from '../Store/auth/AuthSlice';

export const useAuthStore: any = () => {

  const { status, user, errorMessage } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async (email: string, password: string): Promise<void> => {
    try {
      const resp = await growApi.post('/users/login', { email, password });
      // console.log("🚀 ~ file: useAuthStore.ts:16 ~ startLogin ~ resp", resp)
      localStorage.setItem('token', resp.data.token);
      // localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: resp.data.name, id: resp.data.id }));
    } catch (error) {
      console.log("🚀 ~ file: useAuthStore.ts:21 ~ startLogin ~ error", error)
      dispatch(onLogout('Credenciales incorrectas'));
    }
  };

  const CreateUser = async (name: string, email: string, password: string, gender: number): Promise<void> => {
    try {
      const resp = await growApi.post('/users/register', { name, email, password, gender });
      // console.log("🚀 ~ file: useAuthStore.ts:32 ~ CreateUser ~ resp", resp)
      localStorage.setItem('token', resp.data.token);
      dispatch(onLogin({ name: resp.data.name, id: resp.data.id }));
    } catch (error) {
      console.log("🚀 ~ file: useAuthStore.ts:36 ~ CreateUser ~ error", error)
      dispatch(onLogout('Error al crear el usuario'));
    }
  };


  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    // checkAuthToken,
    startLogin,
    // startLogout,
    CreateUser,
  }
}