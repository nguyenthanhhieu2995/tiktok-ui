import { useStore } from '~/store';
import { useLocation } from 'react-router-dom';

import Button from '~/components/Button';
import { cn } from '~/utils/cn';
import { Home, Following, Friends, Explore, Live, Profile } from '~/assets/svgs';
import avatar from '~/assets/images/avatar.jpeg';

const SIDE_BAR = [
    {
        icon: <Home />,
        title: 'For You',
        path: '/',
    },
    {
        icon: <Following />,
        title: 'Following',
        path: '/following',
    },
    {
        icon: <Friends />,
        title: 'Friends',
        path: '/friends',
    },
    {
        icon: <Explore />,
        title: 'Explore',
        path: '/explore',
    },
    {
        icon: <Live />,
        title: 'Live',
        path: '/live',
    },
    {
        icon: <Profile />,
        title: 'Profile',
        path: '/profile',
    },
];

function Sidebar() {
    const [state] = useStore();
    const location = useLocation();
    return (
        <div className="relative h-screen md:min-w-[240px] min-w-[64px] pr-2">
            <div className="top-[60px] h-full pr-2  overflow-y-auto fixed z-50 md:border-0 border-r-[2px] ">
                <div className="pl-5 pt-7 flex flex-col items-stretch ">
                    <nav className="mb-2">
                        <ul className=" space-y-2 font-medium">
                            {SIDE_BAR.map((item) => (
                                <li key={item.title} >
                                    <Button
                                        noClassName
                                        to={item.path}
                                        style={cn(" flex justify-start items-center p-2.5 text-gray-900 rounded hover:bg-gray-100 group", location.pathname === item.path ? 'text-[#fe2c55]' : '')}  
                                    >
                                        <div className="size-[32px]">
                                            {state.isLogin && item.title === 'Profile' ? (
                                                <img className="rounded-full" src={avatar} alt="avatar" />
                                            ) : (
                                                item.icon
                                            )}
                                        </div>
                                        <span className="ml-2 md:block hidden">{item.title}</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
//focus:text-[#fe2c55]