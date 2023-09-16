import { ITodosSchema } from '../types/todos.ts';
import { todosActions, todosReducer } from './todosSlice.ts';

describe( 'TEST TODO STATE', () => {
    const state: ITodosSchema = {
        todos: [],
        sort: 'all',
    };

    const {
        addTodo,
        clearCompletedTodos,
        changeTodo,
        removeTodo,
        changeSort,
    } = todosActions;

    it( 'TEST INITIAL STATE', () => {
        const initialState: ITodosSchema = state;
        const action = { type: 'unknown' };
        expect( todosReducer( initialState, action ) ).toEqual( initialState );
    } );

    it( 'TEST ADD TODO', () => {
        const initialState: ITodosSchema = state;
        const action = addTodo({
            id: 'test-todo-1',
            isDone: false,
            title: 'test-todo-1',
        });
        const expectedState: ITodosSchema = { ...state, todos: [
            {
                title: 'test-todo-1',
                isDone: false,
                id: 'test-todo-1',
            }
        ] };

        expect( todosReducer( initialState, action ) ).toEqual( expectedState );
    } );

    it( 'TEST REMOVE TODO', () => {
        const initialState: ITodosSchema = {...state, todos: [
            {
                id: 'test-todo-1',
                isDone: false,
                title: 'test-todo-1',
            },
            {
                id: 'test-todo-2',
                isDone: false,
                title: 'test-todo-2',
            }
        ]};
        const action = removeTodo( 'test-todo-2' );
        const expectedState: ITodosSchema = { ...state, todos: [
            {
                title: 'test-todo-1',
                isDone: false,
                id: 'test-todo-1',
            }
        ] };

        expect( todosReducer( initialState, action ) ).toEqual( expectedState );
    } );

    it( 'TEST CHANGE TODO', () => {
        const initialState: ITodosSchema = {...state, todos: [
            {
                id: 'test-todo-1',
                isDone: false,
                title: 'test-todo-1',
            },
        ]};
        const action = changeTodo( {
            title: 'test-todo-1',
            isDone: true,
            id: 'test-todo-1',
        } );
        const expectedState: ITodosSchema = { ...state, todos: [
            {
                title: 'test-todo-1',
                isDone: true,
                id: 'test-todo-1',
            }
        ] };

        expect( todosReducer( initialState, action ) ).toEqual( expectedState );
    } );

    it( 'TEST CLEAR COMPLETED TODOS', () => {
        const initialState: ITodosSchema = {...state, todos: [
            {
                id: 'test-todo-1',
                isDone: false,
                title: 'test-todo-1',
            },
            {
                id: 'test-todo-2',
                isDone: true,
                title: 'test-todo-2',
            },
            {
                id: 'test-todo-3',
                isDone: true,
                title: 'test-todo-3',
            },
            {
                id: 'test-todo-4',
                isDone: false,
                title: 'test-todo-4',
            },
            {
                id: 'test-todo-5',
                isDone: true,
                title: 'test-todo-5',
            },
        ]};
        const action = clearCompletedTodos();
        const expectedState: ITodosSchema = { ...state, todos: [
            {
                id: 'test-todo-1',
                isDone: false,
                title: 'test-todo-1',
            },
            {
                id: 'test-todo-4',
                isDone: false,
                title: 'test-todo-4',
            },
        ] };

        expect( todosReducer( initialState, action ) ).toEqual( expectedState );
    } );

    it( 'TEST CHANGE TODOS SORT', () => {
        const initialState: ITodosSchema = state;
        const action = changeSort( 'completed' );
        const expectedState: ITodosSchema = { ...state, sort: 'completed' };

        expect( todosReducer( initialState, action ) ).toEqual( expectedState );
    } );
} );
