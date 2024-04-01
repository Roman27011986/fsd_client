import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

interface IStoreProvider {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider:FC<IStoreProvider> = ({
    children, initialState,
}) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
