import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import NotFound from '~/pages/NotFound';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    
    {
        path: '/following',
        component: Following,
    },
    {
        path:'/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout : HeaderOnly,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export { publicRoutes };
