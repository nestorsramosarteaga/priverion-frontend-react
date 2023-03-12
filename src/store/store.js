import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, employeeSlice, authSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        employee: employeeSlice.reducer,
        ui: uiSlice.reducer
    }
})