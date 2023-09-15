import { palette } from '../common';

export default {
    styleOverrides: {
        root: {
            height: 50,
            padding: '8px 12px',
            borderRadius: '6px',
            boxShadow: 'none'
        },
        contained: {},
        outlined: {
            borderColor: palette.primary.main,
            color: palette.primary.main,
            backgroundColor: 'white'
        }
    }
};
