import classes from './TodoFilters.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { getTodosSort, todosActions } from '@/entities/Todos';
import { ITodosSort } from '@/entities/Todos/model/types/todos.ts';
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

    const onChange = React.useCallback( (_event: React.MouseEvent<HTMLElement>, value: ITodosSort | null) => {
        if (value !== null) {
            dispatch( todosActions.changeSort( value ) );
        }
    }, [ dispatch ] );

    return (
        <Box className={ cn( classes.filters, {}, [ className ] ) }>
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
        </Box>
    );
};

export const TodoFilters = React.memo( TodoFiltersComponent );
