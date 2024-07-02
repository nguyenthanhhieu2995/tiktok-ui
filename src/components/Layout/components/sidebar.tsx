import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useStore, useModal } from '~/hooks';
import routesConfig from '~/config/routes';
import Login from '~/components/Modal/Login';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { cn } from '~/utils/cn';
import { Home, Following, Friends, Explore, Live, Profile } from '~/assets/svgs';
import * as images from '~/assets/images';

const SIDE_BARS = [
    {
        icon: <Home />,
        title: 'For You',
        path: routesConfig.root,
    },
    {
        icon: <Following />,
        title: 'Following',
        path: routesConfig.following,
    },
    {
        icon: <Friends />,
        title: 'Friends',
        path: routesConfig.friends,
    },
    {
        icon: <Explore />,
        title: 'Explore',
        path: routesConfig.explore,
    },
    {
        icon: <Live />,
        title: 'LIVE',
        path: routesConfig.live,
    },
    {
        icon: <Profile />,
        title: 'Profile',
        path: routesConfig.profile,
    },
];
const FOOTERS = [
    {
        title: 'Company',
        contents: ['About', 'Newsroom', 'Contact', 'Careers'],
    },
    {
        title: 'Program',
        contents: [
            'TikTok for Goods',
            'Advertise',
            'Tiktok LIVE Creator Networks',
            'Developers',
            'TTransparency',
            'TikTok Rewards',
            'Tiktok Embeds',
        ],
    },
    {
        title: 'Terms & Policies',
        contents: [
            'Help',
            'Safety',
            'Terms',
            'Privacy policy',
            'Privacy Center',
            'Creator Academy',
            'Community Guidelines',
        ],
    },
];

const CHANNELS = [
    'Dance',
    'Arts',
    'Food and Drink',
    'Tourism',
    'Production and Manufacturing',
    'Vehicles and Transportation',
    'Relationship',
    'TikTok Style',
    'Athletics',
    'Hobbies',
];

function Sidebar() {
    const [showFooter, setShowFooter] = useState(false);
    const [showFooterInfo, setShowFooterInfo] = useState('');
    const { isShowing, showModal, hideModal } = useModal();
    const [state, dispatch] = useStore();
    const location = useLocation();

    const handleShowFooterInfo = (title: string) => {
        setShowFooterInfo(title);
        setShowFooter(true);
        if (showFooterInfo === title) {
            setShowFooter(!showFooter);
        }
    };

    return (
        <div className="relative h-screen md:w-60 w-16 ">
            <div
                id="sidebar"
                className="top-15 max-w-60 h-full  pt-4 overflow-y-auto fixed z-10 md:border-0 border-r-[1.5px]  "
            >
                <div className=" flex flex-col items-stretch space-y-2 children:ml-2 children:border-b-[0.5px]">
                    <nav className="pb-2">
                        <ul className="font-bold text-lg">
                            {SIDE_BARS.map((item) => (
                                <li key={item.title}>
                                    <Button
                                        noDefaultStyle
                                        to={item.path}
                                        style={cn(
                                            'flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 group',
                                            location.pathname === item.path ? 'text-[#fe2c55]' : '',
                                        )}
                                    >
                                        <div className="size-8">
                                            {state.isLogin && item.title === 'Profile' ? (
                                                <img className="rounded-full" src={images.avatar} alt="avatar" />
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
                    {state.isLogin ? (
                        <div className="md:block hidden text-sm pb-2  children:tracking-wide children:my-2 pl-2">
                            <p className="text-gray-700">Following accounts</p>
                            <p className="text-gray-400">Accounts you follow will appear here</p>
                        </div>
                    ) : (
                        <div className="md:block hidden  pb-6 space-y-2 pl-2">
                            <p className="text-gray-400 py-2 pr-2">
                                Log in to follow creators, like videos, and view comments.
                            </p>
                            <Button style="outline-button ml-0 w-[208px] py-4" onClick={() => showModal()}>
                                <p className="text-lg leading-4 font-sans">Log in</p>
                            </Button>
                        </div>
                    )}
                    <div className="pl-2 pt-1">
                        <Button
                            href="https://effecthouse.tiktok.com/download?lang=en&utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                            target="_blank"
                            noDefaultStyle
                            style="md:block hidden border-0 w-[208px] pt-1"
                        >
                            <div className="relative flex items-center justify-center">
                                <Image className="" src={images.earnCoin} alt="earncoin" />
                                <div className="absolute flex items-center justify-center text-start w-[140px] left-[50px]">
                                    <div className="overflow-hidden max-h-[40px] w-full">
                                        <p className="text-[#fff5c9] text-[13px]">
                                            Create TikTok effects, get a reward
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button
                            noDefaultStyle
                            style="md:hidden block group"
                            href="https://effecthouse.tiktok.com/download?lang=en&utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                        >
                            <div className="group-hover:hidden size-8">
                                <Image src={images.effectHouse} alt="effectHouse" />
                            </div>
                            <div className="group-hover:block hidden size-8">
                                <Image src={images.effectHouseHover} alt="effectHouseHover" />
                            </div>
                        </Button>
                        <div className="md:block hidden my-6 text-sm tracking-wide pb-16">
                            {FOOTERS.map((item) => {
                                return (
                                    <>
                                        <h4 className="font-bold" onClick={() => handleShowFooterInfo(item.title)}>
                                            {item.title}
                                        </h4>
                                        <div className="pb-4 flex flex-wrap justify-start items-center text-xs children:text-gray-400  gap-1 hover:children:underline leading-5">
                                            {showFooterInfo === item.title &&
                                                showFooter &&
                                                item.contents.map((content) => <a href="#">{content}</a>)}
                                        </div>
                                    </>
                                );
                            })}
                            {!state.isLogin && (
                                <>
                                    <h4 className='font-bold'>Channels</h4>
                                    <div className="pb-4 flex flex-wrap justify-start items-center text-xs children:text-gray-400  gap-1 hover:children:underline leading-5">
                                        {CHANNELS.map((channel) => <a href="#">{channel}</a>)}
                                    </div>
                                </>
                            )}
                            <p className="text-gray-400 text-xs font-sans">© 2024 TikTok</p>
                        </div>
                    </div>
                </div>
            </div>
            <Login isShowing={isShowing} hideModal={hideModal} />
        </div>
    );
}

export default Sidebar;
//focus:text-[#fe2c55]
