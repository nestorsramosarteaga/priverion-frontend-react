import { useDispatch, useSelector } from 'react-redux';
import { backendApi } from '../api';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();


    const startLogin = async({ email, password }) => {
        console.log({ backendApi });
        try {
            const resp = await backendApi.post('/auth', { email, password });
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    return{
        //* Properties
        errorMessage,
        status, 
        user,

        //* Methods
        startLogin,
    }

}
