import { DefaultLayout, HeaderOnly, HeaderArround } from '~/components/Layout';
import {
    Foryou,
    Friends,
    Following,
    Upload,
    NotFound,
    Live,
    Profile,
    Messages,
    Explore,
    Setting,
    ErrorNotFound,
    Feedback,
    GetCoin
} from '~/pages';
import routesConfig from '~/config/routes';


const publicRoutes = [
    {
        path: routesConfig.root,
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Foryou />,
            },
            {
                path: routesConfig.following,
                element: <Following />,
            },
            {
                path: routesConfig.friends,
                element: <Friends />,
            },
            {
                path: routesConfig.explore,
                element: <Explore />,
            },
            {
                path: routesConfig.live,
                element: <Live />,
            },
            {
                path: routesConfig.profile,
                element: <Profile />,
            },
        ],
    },
    {
        path: routesConfig.upload,
        element: <Upload />,
    },
    {
        path: routesConfig.root,
        element: <HeaderOnly  />,
        children: [
            {
                path: routesConfig.setting,
                element: <Setting />,
            },
            {
                path: routesConfig.messages,
                element: <Messages />,
            },
            {
                path: routesConfig.error,
                element: <ErrorNotFound />,
            },
        ],
    },
    {
        path: routesConfig.root,
        element:<HeaderArround  />,
        children: [
            {
                path: routesConfig.feedback,
                element: <Feedback />,
            },
            {
                path: routesConfig.getCoin,
                element: <GetCoin />,
            }
        ]
    },
    {
        path: routesConfig.notFound,
        element: <NotFound />,
    },
];

export { publicRoutes };
