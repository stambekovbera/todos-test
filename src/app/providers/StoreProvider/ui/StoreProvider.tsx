import React from 'react';
import { createReduxStore } from '@/shared/config/storeConfig/store';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { IStoreSchema } from '@/shared/config/storeConfig/StoreSchema.ts';
import { Provider } from 'react-redux';

interface IStoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<IStoreSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStoreSchema>>;
}

const StoreProviderComponent: React.FC<IStoreProviderProps> = (props) => {
    const {
        children,
        asyncReducers,
        initialState,
    } = props;

    const store = createReduxStore(
        initialState as IStoreSchema,
        asyncReducers as ReducersMapObject<IStoreSchema>,
    );

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};

export const StoreProvider = React.memo( StoreProviderComponent );
