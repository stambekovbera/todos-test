import React from 'react';

export const MainPageAsync = React.lazy( () => {
    return new Promise( resolve => resolve( import(( './MainPage' )) ) );
} );
