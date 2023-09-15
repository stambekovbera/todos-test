import { ruRU as coreRuRu } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import {
    MuiBackdrop,
    MuiButton,
    MuiDialogActions,
    MuiDialogContent,
    MuiDialogTitle,
    MuiFormLabel,
    MuiIconButton,
    MuiInputBase,
    MuiOutlinedInput,
    MuiPagination
} from './overrides';
import { palette, typography } from './common';

const theme = createTheme(
    {
        palette,
        typography,

        components: {
            MuiButton,
            MuiInputBase,
            MuiDialogTitle,
            MuiDialogContent,
            MuiDialogActions,
            MuiOutlinedInput,
            MuiPagination,
            MuiBackdrop,
            MuiIconButton,
            MuiFormLabel,
        },
    },
    coreRuRu
);

export default theme;
