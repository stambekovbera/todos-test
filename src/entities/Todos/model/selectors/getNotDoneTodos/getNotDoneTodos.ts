import { createSelector } from '@reduxjs/toolkit';
import { getTodos } from '../getTodos/getTodos.ts';
import { ITodo } from '../../types/todos.ts';

export const getNotDoneTodos = createSelector(
    getTodos,
    (todos: ITodo[]) => todos.filter( (todo) => Boolean( !todo.isDone ) )
);
