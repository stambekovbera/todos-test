export interface ITodo {
    id: number | string;
    title: string;
    isDone: boolean;
}

export interface ITodosSchema {
    todos: ITodo[];
}
