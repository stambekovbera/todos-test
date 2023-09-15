import { IStoreSchema } from '@/shared/config/storeConfig/StoreSchema.ts';

export const getTodosState = (state: IStoreSchema) => state.todos;
