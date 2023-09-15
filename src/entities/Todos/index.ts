export type {
    ITodosSchema,
    ITodo
} from './model/types/todos.ts';

export {
    todosSlice,
    todosReducer,
    todosActions
} from './model/slice/todosSlice.ts';

export {
    getTodos
} from './model/selectors/getTodos/getTodos.ts';
export {
    getTodosState
} from './model/selectors/getTodosState/getTodosState.ts';
export {
    getTodosSort
} from './model/selectors/getTodosSort/getTodosSort.ts';
export {
    getSortedTodos
} from './model/selectors/getSortedTodos/getSortedTodos.ts';
