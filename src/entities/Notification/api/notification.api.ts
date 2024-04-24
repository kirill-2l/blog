import { rtkApi } from '@/shared/api/rtkApi.instance';
import { INotification } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const useNotifications = notificationApi.useFetchNotificationsQuery;
