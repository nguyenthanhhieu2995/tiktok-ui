
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="pt-[60px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
