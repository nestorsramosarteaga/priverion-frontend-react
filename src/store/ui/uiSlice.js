
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
      isEmployeeModalOpen: false
   },
   reducers: {
      onOpenEmployeeModal: ( state ) => {
        state.isEmployeeModalOpen = true;
      },
      onCloseEmployeeModal: ( state ) => {
        state.isEmployeeModalOpen = false;
      },

   },
});

export const { onOpenEmployeeModal, onCloseEmployeeModal } = uiSlice.actions;