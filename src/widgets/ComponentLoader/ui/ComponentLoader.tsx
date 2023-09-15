import classes from './ComponentLoader.module.scss';
import cn from 'classnames';
import React from 'react';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

interface IComponentLoaderProps {
	className?: string;
}

const ComponentLoaderComponent: React.FC<IComponentLoaderProps> = (props) => {
    const {
        className = '',
    } = props;
    return (
        <div className={ cn( classes.componentLoader, {}, [ className ] ) }>
            <Loader/>
        </div>
    );
};

export const ComponentLoader = React.memo( ComponentLoaderComponent );
