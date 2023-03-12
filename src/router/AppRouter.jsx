import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { EmployeePage } from "../employee";


export const AppRouter = () => {

    const authStatus =  'not-authenticated'; // 'checking, 'authenticated', 'not-authenticated'

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? <Route path="/auth/*" element={<LoginPage />} />
                    :<Route path="/*" element={<EmployeePage />} />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" />} />

        </Routes>
    )
}
