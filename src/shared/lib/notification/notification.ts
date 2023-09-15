import { toast } from 'react-toastify';

export type INotificationType = 'info' | 'success' | 'warning' | 'error' | 'html';

export interface INotification {
    message: string;
    type: INotificationType;
}

const notificationState: INotification = {
    type: 'info',
    message: '',
};

export const notification = (notification = notificationState) => {
    switch (notification.type) {
    case 'info': {
        toast.info( notification.message );
        break;
    }
    case 'success': {
        toast.success( notification.message );
        break;
    }
    case 'warning': {
        toast.warn( notification.message );
        break;
    }
    case 'error': {
        toast.error( notification.message );
        break;
    }
    case 'html': {
        toast( notification.message );
        break;
    }
    }
};
