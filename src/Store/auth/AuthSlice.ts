import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  
  status : string,
  user : any, // Crear otra interfaz? que llevará?
  errorMessage : any,

}

const initialState : AuthState = {
  status : 'checking',
  user : {},
  errorMessage : 'No autenticado'
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'Authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    }
  }
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = AuthSlice.actions;
