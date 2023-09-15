import {
    AnyAction,
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
    ThunkMiddleware
} from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { IReducerManager, IStoreSchema } from './StoreSchema.ts';
import { todosReducer } from '@/entities/Todos';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

interface IReduxStore extends ToolkitStore<IStoreSchema, AnyAction, [ ThunkMiddleware<IStoreSchema, AnyAction> ]> {
    reducerManager?: IReducerManager;
}

export const createReduxStore = (initialState?: IStoreSchema, asyncReducers?: ReducersMapObject<IStoreSchema>) => {
    const rootReducers: ReducersMapObject<IStoreSchema> = {
        ...asyncReducers,
        todos: todosReducer,
    };

    const reducerManager = createReducerManager( rootReducers );

    const store: IReduxStore = configureStore<IStoreSchema>( {
        reducer: reducerManager.reduce as Reducer<CombinedState<IStoreSchema>>,
        devTools: import.meta.env.DEV,
        preloadedState: initialState,
    } );

    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
