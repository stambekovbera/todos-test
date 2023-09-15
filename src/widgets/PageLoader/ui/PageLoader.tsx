import classes from './PageLoader.module.scss';
import cn from 'classnames';
import React from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';

interface IPageLoaderProps {
    className?: string;
}

const PageLoaderComponent: React.FC<IPageLoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ cn( classes.pageLoader, {}, [ className ] ) }>
            <Loader/>
        </div>
    );
};

export const PageLoader = React.memo( PageLoaderComponent );
