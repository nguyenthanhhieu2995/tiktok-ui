import { DefaultLayout, HeaderOnly } from '~/components/Layout';

import { Foryou, Friends, Following, Upload, NotFound, Live, Profile, Messages, Explore, Setting } from '~/pages';
import ErrorNotFound from '~/pages/ErrorNotFound';

const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Foryou />,
            },
            {
                path: '/following',
                element: <Following />,
            },
            {
                path: '/friends',
                element: <Friends />,
            },
            {
                path: '/explore',
                element: <Explore />,
            },
            {
                path: '/live',
                element: <Live />,
            },
            {
                path: '/:username',
                element: <Profile />,
            },
        ],
    },
    {
        path: '/upload',
        element: <Upload />,
    },
    {
        path: '/messages',
        element: <Messages />,
    },
    {
        path: '/',
        element: <HeaderOnly />,
        children: [
            { path: '/setting', element: <Setting /> },
            {
                path: '/404',
                element: <ErrorNotFound />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export { publicRoutes };
