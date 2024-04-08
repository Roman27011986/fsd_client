import { ReactNode } from 'react';
import {
    Provider,
} from 'react-redux';
import {
    ReducersMapObject, createAsyncThunk,
} from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

interface IStoreProvider {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: IStoreProvider) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const createAppAsyncThunk = createAsyncThunk.withTypes<{
//     state: RootState;
//     dispatch: AppDispatch;
//     rejectValue: string;
//     extra: { s: string; n: number };
// }>();
