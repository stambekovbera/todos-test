export interface ITodo {
    id: number | string;
    title: string;
    description?: string;
    isDone: boolean;
}

export interface ITodosSchema {
    todos: ITodo[];
}
