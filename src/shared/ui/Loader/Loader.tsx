import classes from './Loader.module.scss';
import cn from 'classnames';
import React from 'react';

interface ILoaderProps {
    className?: string;
}

const LoaderComponent: React.FC<ILoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ cn( classes.ldsEllipsis, {}, [ className ] ) }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export const Loader = React.memo( LoaderComponent );
