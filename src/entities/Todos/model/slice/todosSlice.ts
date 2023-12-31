import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, ITodosSchema, ITodosSort } from '@/entities/Todos/model/types/todos.ts';

const initialState: ITodosSchema = {
    todos: [],
    sort: 'all',
};

export const todosSlice = createSlice( {
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push( action.payload );
        },
        removeTodo: (state, action: PayloadAction<number | string>) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload );
        },
        changeTodo: (state, action: PayloadAction<ITodo>) => {
            const currentTodo = action.payload;

            state.todos = state.todos.map( (todo) => {
                if (todo.id === currentTodo.id) {
                    return currentTodo;
                }

                return todo;
            } );
        },
        clearCompletedTodos: (state) => {
            if (state.todos.find( (todo) => todo.isDone )) {
                state.todos = state.todos.filter( (todo) => Boolean( !todo.isDone ) );
            }
        },
        changeSort: (state, action: PayloadAction<ITodosSort>) => {
            state.sort = action.payload;
        },
    },
} );

export const {
    reducer: todosReducer,
    actions: todosActions
} = todosSlice;
