import { useDispatch, useSelector } from 'react-redux';
import  growApi  from '../Services/Api/growApi';
import { clearErrorMessage, onLogin, onLogout } from '../Store/auth/AuthSlice';

export const useAuthStore : any = () => {

    const { status, user, errorMessage } = useSelector( (state : any) => state.auth );
    const dispatch = useDispatch();

    const startLogin = async (email: string , password: string): Promise<any> => {

        console.log(typeof email , typeof password , 'Desde auth')

        try {
          const resp = await growApi.post('/users/login', { email , password });
          console.log(resp)
          localStorage.setItem('token', resp.data.token);
          localStorage.setItem('token-init-date', new Date().getTime().toString());
          dispatch(onLogin({ name: resp.data.name, id: resp.data.id }));
        } catch (error) {
          console.log({ error });
          dispatch(onLogout('Credenciales incorrectas'));
          setTimeout(() => {
            dispatch( clearErrorMessage() );
        }, 10);
          
        }
    };


    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        startLogin,

    }
}