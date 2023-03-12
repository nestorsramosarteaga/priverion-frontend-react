import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { EmployeePage } from "../employee";
import { useAuthStore } from "../hooks";


export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();
    // const authStatus =  'not-authenticated'; // 'checking, 'authenticated', 'not-authenticated'

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }


    return (
        <Routes>
            {
                ( status === 'not-authenticated' )
                    ? (
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={ <Navigate to="/auth/login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<EmployeePage />} />
                            <Route path="/*" element={ <Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>
    )
}
