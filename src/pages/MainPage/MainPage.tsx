import classes from './MainPage.module.scss';
import cn from 'classnames';
import React from 'react';

interface IMainPageProps {
	className?: string;
}

const MainPage: React.FC<IMainPageProps> = (props) => {
    const {
        className = '',
    } = props;
    return (
        <div className={ cn( classes.page, {}, [ className ] ) }>
            Главная страница
        </div>
    );
};

export default MainPage;
