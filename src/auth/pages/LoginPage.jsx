
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm, useAuthStore } from '../../hooks';

import './LoginPage.css';


const loginFormsField = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormsField = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirmed:'',
}

export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormsField );
    const { registerName, registerEmail, registerPassword, registerPasswordConfirmation, onInputChange: onRegisterInputChange } = useForm( registerFormsField );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPasswordConfirmation ) {
            Swal.fire('Register error', 'The passwords do not match', 'error');
            return;
        }
        startRegister({ name: registerName, email: registerEmail, password: registerPassword }); // , password_confirmation: registerPasswordConfirmation
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire('Authentication error', 'Incorrect credentials', 'error');
        }
    }, [errorMessage])
    



    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-4 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={ loginSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="loginEmail"
                                value={ loginEmail }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="loginPassword"
                                value={ loginPassword }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                {/* <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"                                
                                name="registerName"
                                value={ registerName }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="registerEmail"
                                value={ registerEmail }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="registerPassword"
                                value={ registerPassword }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat the password"
                                name="registerPasswordConfirmation"
                                value={ registerPasswordConfirmation }
                                onChange={ onRegisterInputChange } 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Create Account" />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    )
}
