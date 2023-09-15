import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AppDispatch } from '@/shared/config/storeConfig/store.ts';

export interface IStoreSchema {
}

export type StoreSchemaKey = keyof IStoreSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStoreSchema>
    reduce: (state: IStoreSchema, action: AnyAction) => CombinedState<IStoreSchema>
    add: (key: StoreSchemaKey, reducer: Reducer) => void
    remove: (key: StoreSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStoreSchema> {
    reducerManager: IReducerManager;
}


export interface ThunkConfig<T> {
    rejectValue: T,
    state: IStoreSchema,
    dispatch: AppDispatch
}
