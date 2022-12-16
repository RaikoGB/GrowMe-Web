import { useDispatch, useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import { clearErrorMessage, onLogin, onLogout, onChecking } from '../Store/auth/AuthSlice';

export const useAuthStore: any = () => {

  const { status, user, errorMessage } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async (email: string, password: string): Promise<any> => {
    dispatch(onChecking());
    try {
      const resp = await growApi.post('/users/login', { email, password });
      // console.log(resp)
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: resp.data.name, uid: resp.data.id }));
    } catch (error) {
      console.log("🚀 ~ file: useAuthStore.tsx:19 ~ startLogin ~ error", error);
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const createUser = async (name: string, email: string, password: string, gender: number): Promise<any> => {

    try {
      const resp = await growApi.post('/users/register', { name, email, password, gender });
      console.log("🚀 ~ file: useAuthStore.tsx:36 ~ createUser ~ resp", resp)
    } catch (error) {
      console.log("🚀 ~ file: useAuthStore.tsx:41 ~ createUser ~ error", error)
    }
  };

  const checkToken = async (): Promise<any> => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const token = localStorage.getItem('token');
    // console.log("🚀 ~ file: useAuthStore.tsx:52 ~ checkToken ~ token", token)
    try {
      const { data } = await growApi.get('/users/renew');
      // console.log({data})
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: data.name, email: data.email, uid: data.id }));
      // console.log("🚀 ~ file: useAuthStore.tsx:58 ~ checkToken ~ data.uid ", data.id )
    } catch (error) {
      console.log(error)
      localStorage.clear();
      dispatch(onLogout('Token expiro'));
    }
  }

  const startLogout = (): any => {
    localStorage.clear();
    dispatch(onLogout('Cerrar sesión'));
  }

  return {
    //* Propiedades
    errorMessage,
    status,
    user,
    startLogin,
    createUser,
    checkToken,
    startLogout
  }
}