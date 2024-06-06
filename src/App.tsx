import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
import './App.css';

function App() {
    const Routes = publicRoutes.map((route) => {
        let Layout : any = DefaultLayout;
        if (route.layout) {
            Layout = route.layout;
        } else if (route.layout === null) {
            Layout = Fragment;
        }
        const Page = route.component;
        return {
            path: route.path,
            element: (
                <Layout>
                    <Page />
                </Layout>
            ),
        };
    });
    const router = createBrowserRouter(Routes);
    return <RouterProvider router={router} />;
}

export default App;
