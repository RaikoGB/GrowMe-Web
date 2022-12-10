import { useDispatch, useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import { clearErrorMessage, onLogin, onLogout, onChecking } from '../Store/auth/AuthSlice';

export const useAuthStore: any = () => {

  const { status, user, errorMessage } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async (email: string, password: string): Promise<any> => {

    // console.log(typeof email , typeof password , 'Desde auth')
    dispatch(onChecking());
    try {
      const resp = await growApi.post('/users/login', { email, password });
      console.log(resp)
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: resp.data.name, id: resp.data.id }));
    } catch (error) {
      console.log({ error });
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);

    }
  };

  const createUser = async (name: string, email: string, password: string, username: string, gender: number): Promise<any> => {

    dispatch(onChecking());

    try {
      const resp = await growApi.post('/users/register', { name, email, password, username, gender });
      console.log(resp)
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: resp.data.name, id: resp.data.id , msg : resp.data.msg}));
    } catch (error: any) {
      console.log({ error })
      // dispatch(onLogout(error.response.data.msg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);

    }
  };

  const checkToken = async () : Promise<any> => {
    const token = localStorage.getItem('token');
    console.log(token , 'Yo soy el token1')
    if ( token !== null ){
      return dispatch(onLogout(' Yo soy error '));
    }
    
    try {
      const { data } = await growApi.get('/users/renew');
      console.log({data})
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(onLogin({ name: data.name, email : data.email ,id: data.id }));
    } catch (error) {
      localStorage.clear();
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
       dispatch(onLogout('token expiro'));
    }
  }

  const startLogout = ():any => {
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