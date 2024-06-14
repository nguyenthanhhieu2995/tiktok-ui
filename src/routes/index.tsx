import { DefaultLayout } from '~/components/Layout';

import { Foryou, Friends, Following, Upload, NotFound, Live, Profile, Messages, Explore } from '~/pages';

const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <NotFound />,
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
                path: '/profile',
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
];

export { publicRoutes };
