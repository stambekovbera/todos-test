import '@/app/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from '@/app/App.tsx';
import ReactDOM from 'react-dom/client';
import theme from '@/app/mui-theme';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <ThemeProvider theme={ theme }>
        <BrowserRouter>
            <StoreProvider>
                <App/>

                <ToastContainer
                    position="top-right"
                    autoClose={ 5000 }
                    hideProgressBar={ false }
                    newestOnTop={ false }
                    closeOnClick
                    pauseOnHover
                />
            </StoreProvider>
        </BrowserRouter>
    </ThemeProvider>
);
