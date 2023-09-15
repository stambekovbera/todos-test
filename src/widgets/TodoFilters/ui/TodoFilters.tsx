import classes from './TodoFilters.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, Button, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { getNotDoneTodos, getTodosSort, todosActions } from '@/entities/Todos';
import { ITodosSort } from '@/entities/Todos/model/types/todos.ts';
import { notification } from '@/shared/lib/notification/notification.ts';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';

interface ITodoFiltersProps {
    className?: string;
}

const TodoFiltersComponent: React.FC<ITodoFiltersProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useAppDispatch();
    const value = useSelector( getTodosSort );
    const notDoneTodos = useSelector( getNotDoneTodos );

    const onChange = React.useCallback( (_event: React.MouseEvent<HTMLElement>, value: ITodosSort | null) => {
        if (value !== null) {
            dispatch( todosActions.changeSort( value ) );
        }
    }, [ dispatch ] );

    const onClearCompleted = React.useCallback( () => {
        dispatch( todosActions.clearCompletedTodos() );

        notification( {
            message: 'Completed todos successfully deleted',
            type: 'success',
        } );
    }, [ dispatch ] );

    return (
        <Box className={ cn( classes.filters, {}, [ className ] ) }>
            <Box className={ classes.row }>
                <ToggleButtonGroup
                    value={ value }
                    exclusive
                    onChange={ onChange }
                    color='primary'
                >
                    <ToggleButton
                        color='primary'
                        value="all"
                        aria-label="left aligned"
                    >
                        All
                    </ToggleButton>
                    <ToggleButton
                        color='primary'
                        value="active"
                        aria-label="centered"
                    >
                        Active
                    </ToggleButton>
                    <ToggleButton
                        color='primary'
                        value="completed"
                        aria-label="right aligned"
                    >
                        Completed
                    </ToggleButton>
                </ToggleButtonGroup>
                <Typography>
                    { notDoneTodos.length } items left
                </Typography>
            </Box>
            <Button
                onClick={ onClearCompleted }
            >
                Clear completed
            </Button>
        </Box>
    );
};

export const TodoFilters = React.memo( TodoFiltersComponent );
