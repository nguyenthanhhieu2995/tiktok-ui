import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import { publicRoutes } from '~/routes';

function App() {


    const router = createBrowserRouter(publicRoutes);
    return <RouterProvider router={router} />;
}

export default App;
