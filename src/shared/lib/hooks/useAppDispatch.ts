import { AppDispatch } from '@/shared/config/storeConfig/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
