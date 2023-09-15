import classes from './TodoList.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { getSortedTodos, getTodos } from '@/entities/Todos';
import { TodoFilters } from '@/widgets/TodoFilters/ui/TodoFilters.tsx';
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
    const sortedTodos = useSelector( getSortedTodos );

    return (
        <>
            { todos.length > 0 && (
                <Box className={ cn( classes.listWrapper, {}, [ className ] ) }>
                    <TodoFilters/>

                    { sortedTodos.length > 0
                        ? (
                            <Box className={ classes.list }>
                                { sortedTodos.map( (todo) => (
                                    <TodoItem
                                        key={ todo.id }
                                        todo={ todo }
                                    />
                                ) ) }
                            </Box>
                        )
                        : (
                            <Typography
                                variant='h4'
                                component='p'
                            >
                                Not todos
                            </Typography>
                        )
                    }
                </Box>
            )
            }
        </>
    );
};

export const TodoList = React.memo( TodoListComponent );
