
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function HeaderArround() {
    return (
        <div >
            <Header center/>
            <div className="container px-40">
                <div className="pt-[60px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default HeaderArround;