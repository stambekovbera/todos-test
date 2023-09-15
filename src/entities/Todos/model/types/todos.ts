export type ITodosSort = 'all' | 'active' | 'completed';

export interface ITodo {
    id: number | string;
    title: string;
    isDone: boolean;
}

export interface ITodosSchema {
    todos: ITodo[];
    sort: ITodosSort;
}
