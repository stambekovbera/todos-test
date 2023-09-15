import { createSelector } from '@reduxjs/toolkit';
import { getTodosState } from '../getTodosState/getTodosState.ts';
import { ITodosSchema } from '../../types/todos.ts';

export const getTodos = createSelector(
    getTodosState,
    (state: ITodosSchema) => state.todos
);
