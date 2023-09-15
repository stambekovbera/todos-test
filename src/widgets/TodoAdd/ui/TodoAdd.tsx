import classes from './TodoAdd.module.scss';
import cn from 'classnames';
import React from 'react';
import uuid from 'react-uuid';
import { CheckRounded as CheckIcon, ClearRounded as ClearIcon } from '@mui/icons-material';
import { IconButton, TextField, Tooltip } from '@mui/material';
import { notification } from '@/shared/lib/notification/notification.ts';
import { todosActions } from '@/entities/Todos';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.ts';

interface ITodoAddProps {
    className?: string;
}

const TodoAddComponent: React.FC<ITodoAddProps> = (props) => {
    const {
        className = '',
    } = props;

    const dispatch = useAppDispatch();
    const [ value, setValue ] = React.useState<string>( '' );

    const handleChange = React.useCallback( (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue( () => event.target.value );
    }, [] );

    const onClearField = React.useCallback( () => {
        setValue( () => '' );
    }, [] );

    const onAddTodo = React.useCallback( () => {
        dispatch( todosActions.addTodo( {
            id: uuid(),
            title: value,
            isDone: false,
        } ) );

        setValue( () => '' );

        notification({
            message: 'Todo added successfully',
            type: 'success'
        });
    }, [ dispatch, value ] );

    return (
        <TextField
            label="Todo"
            value={ value }
            className={ cn( classes.todoAdd, {}, [ className ] ) }
            onChange={ handleChange }
            InputProps={ {
                endAdornment: value.length > 0 && (
                    <>
                        <Tooltip title='Clear field'>
                            <IconButton
                                color='primary'
                                onClick={ onClearField }
                            >
                                <ClearIcon
                                    color='primary'
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Add todo'>
                            <IconButton
                                color='secondary'
                                onClick={ onAddTodo }
                            >
                                <CheckIcon
                                    color='secondary'
                                />
                            </IconButton>
                        </Tooltip>
                    </>
                ),
            } }
        />
    );
};

export const TodoAdd = React.memo( TodoAddComponent );
