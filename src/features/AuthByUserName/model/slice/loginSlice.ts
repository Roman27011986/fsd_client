import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: ILoginSchema = {
    isLoading: false,
    error: '',
    userName: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },

        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
