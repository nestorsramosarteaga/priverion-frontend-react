import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, employeeSlice } from './';

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
        ui: uiSlice.reducer
    }
})