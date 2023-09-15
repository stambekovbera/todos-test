import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, ITodosSchema } from '@/entities/Todos/model/types/todos.ts';

const initialState: ITodosSchema = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [ ...state.todos, action.payload ];
        },
        removeTodo: (state, action: PayloadAction<number | string>) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload );
        },
        changeTodo: (state, action: PayloadAction<ITodo>) => {
            const currentTodo = action.payload;

            state.todos = state.todos.map((todo) => {
                if (todo.id === currentTodo.id) {
                    return currentTodo;
                }

                return todo;
            });
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter( (todo) => Boolean( !todo.isDone ) );
        },
    },
});

export const {
    reducer: todosReducer,
    actions: todosActions
} = todosSlice;
