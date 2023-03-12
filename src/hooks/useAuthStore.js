import { useDispatch, useSelector } from 'react-redux';
import { backendApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();


    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await backendApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id, name: data.name, email: data.email, is_admin: data.is_admin }) );
        } catch (error) {
            dispatch( onLogout('Incorrect credentials') );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister =  async({ email, password, name }) => {
        dispatch( onChecking() );
        try {
            const { data } = await backendApi.post('/register', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id, name: data.name, email: data.email }) );
        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '---' ) );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() );
        try {
            // TODO: Create renew route
            // const { data } =  await backendApi.get('auth/renew');
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('token-init-date', new Date().getTime() );
            //console.log({data: data});            
            dispatch( onLogin({ id: data.id, name: data.name, email: data.email }) );
        } catch (error) {
           localStorage.clear();
           dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return{
        //* Properties
        errorMessage,
        status, 
        user,

        //* Methods
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }

}
