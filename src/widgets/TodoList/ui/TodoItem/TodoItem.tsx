import classes from './TodoItem.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, Checkbox, FormControlLabel, IconButton, Tooltip } from '@mui/material';
import { DeleteRounded as DeleteIcon } from '@mui/icons-material';
import { ITodo, todosActions } from '@/entities/Todos';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.ts';

interface ITodoItemProps {
    todo: ITodo;
    className?: string;
}

const TodoItemComponent: React.FC<ITodoItemProps> = (props) => {
    const {
        todo,
        className = '',
    } = props;

    const dispatch = useAppDispatch();

    const toggleIsDone = React.useCallback( (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch( todosActions.changeTodo( {
            ...todo,
            isDone: checked,
        } ) );
    }, [ dispatch, todo ] );

    const onDeleteTodo = React.useCallback( () => {
        dispatch( todosActions.removeTodo( todo.id ) );
    }, [ dispatch, todo.id ] );

    return (
        <Box className={ cn( classes.todo, {}, [ className ] ) }>
            <Box className={ classes.row }>
                <FormControlLabel
                    control={
                        <Tooltip title='Todo is done'>
                            <Checkbox
                                color='primary'
                                checked={ todo.isDone }
                                onChange={ toggleIsDone }
                            />
                        </Tooltip>
                    }
                    label={ todo.title }
                />
            </Box>
            <Tooltip title='Delete todo'>
                <IconButton
                    color='secondary'
                    onClick={ onDeleteTodo }
                >
                    <DeleteIcon color='secondary'/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export const TodoItem = React.memo( TodoItemComponent );
