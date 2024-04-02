import { ReactNode } from 'react';
import {
    Provider, TypedUseSelectorHook, useDispatch, useSelector,
} from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

interface IStoreProvider {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const store = createReduxStore();

export const StoreProvider = (props: IStoreProvider) => {
    const {
        children,
        initialState,
    } = props;

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const createAppAsyncThunk = createAsyncThunk.withTypes<{
//     state: RootState;
//     dispatch: AppDispatch;
//     rejectValue: string;
//     extra: { s: string; n: number };
// }>();
