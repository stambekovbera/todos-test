import classes from './TodoList.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box } from '@mui/material';
import { getTodos } from '@/entities/Todos';
import { TodoItem } from '@/widgets/TodoList/ui/TodoItem/TodoItem.tsx';
import { useSelector } from 'react-redux';

interface ITodoListProps {
    className?: string;
}

const TodoListComponent: React.FC<ITodoListProps> = (props) => {
    const {
        className = '',
    } = props;

    const todos = useSelector( getTodos );

    return (
        <Box className={ cn( classes.list, {}, [ className ] ) }>
            { todos.map( (todo) => (
                <TodoItem
                    key={ todo.id }
                    todo={ todo }
                />
            ) ) }
        </Box>
    );
};

export const TodoList = React.memo( TodoListComponent );
