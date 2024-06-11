import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-full flex flex-row pt-[60px]">
                <Sidebar />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
