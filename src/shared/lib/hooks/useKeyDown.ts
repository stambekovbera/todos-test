import React from 'react';

interface IUseKeyDownProps {
    keyCode: string;
    callback: () => void
}

export const useKeyDown = (props: IUseKeyDownProps) => {
    const {
        keyCode,
        callback
    } = props;

    React.useEffect( () => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === keyCode) {
                callback();
            }
        };

        document.addEventListener( 'keydown', handleKeyDown );

        return () => document.removeEventListener( 'keydown', handleKeyDown );
    }, [ callback, keyCode ] );
};
