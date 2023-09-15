import classes from './MainPage.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { TodoAdd } from '@/widgets/TodoAdd';

interface IMainPageProps {
    className?: string;
}

const MainPage: React.FC<IMainPageProps> = (props) => {
    const {
        className = '',
    } = props;
    return (
        <Box className={ cn( classes.page, {}, [ className ] ) }>
            <Box
                className={ classes.pageContent }
            >
                <Typography
                    className={ classes.title }
                    variant='h1'
                    component='h1'
                >
                    Todos
                </Typography>

                <Box>
                    <TodoAdd/>
                </Box>
            </Box>
        </Box>
    );
};

export default MainPage;
