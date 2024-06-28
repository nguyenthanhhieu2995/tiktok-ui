import { useLocation } from 'react-router-dom';

import { useStore, useModal } from '~/hooks';

import Login from '~/components/Modal/Login';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { cn } from '~/utils/cn';
import { Home, Following, Friends, Explore, Live, Profile } from '~/assets/svgs';
import  * as images from '~/assets/images';

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
        title: 'LIVE',
        path: '/live',
    },
    {
        icon: <Profile />,
        title: 'Profile',
        path: '/profile',
    },
];

function Sidebar() {
    const { isShowing, showModal, hideModal } = useModal();
    const [state, dispatch] = useStore();
    const location = useLocation();
    return (
        <div className="relative h-screen md:w-[240px] w-[64px] text-[18px] ">
            <div
                id="sidebar"
                className="top-[60px] max-w-[240px] h-full  pl-2 pt-5 overflow-y-auto fixed z-10 md:border-0 border-r-[1.5px] "
            >
                <div className=" flex flex-col items-stretch space-y-2 children:ml-4  children:border-b-[0.5px]">
                    <nav className="py-4">
                        <ul className=" space-y-2 font-bold">
                            {SIDE_BAR.map((item) => (
                                <li key={item.title}>
                                    <Button
                                        noDefaultStyle
                                        to={item.path}
                                        style={cn(
                                            ' flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 group',
                                            location.pathname === item.path ? 'text-[#fe2c55]' : '',
                                        )}
                                    >
                                        <div className="size-[32px]">
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
                        <div className="md:block hidden children:text-[14px] py-4  children:tracking-wide space-y-4 children:my-4">
                            <p className="text-gray-700">Following accounts</p>
                            <p className="text-gray-400">Accounts you follow will appear here</p>
                        </div>
                    ) : (
                        <div className="md:block hidden children:tracking-wide pb-10 pt-4 space-y-4 children:py-4">
                            <p className="text-gray-400 text-[16px]">
                                Log in to follow creators, like videos, and view comments
                            </p>
                            <Button
                                style="outline-button ml-0 min-w-[168px] min-h-[48px] w-[208px]"
                                onClick={() => showModal()}
                            >
                                <p className="text-[18px] font-sans">Log in</p>
                            </Button>
                        </div>
                    )}
                    <div className="pt-4">
                        <Button
                            href="https://effecthouse.tiktok.com/download?lang=en&utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                            target="_blank"
                            noDefaultStyle
                            style="md:block hidden border-0 w-[208px] pt-2"
                        >
                            <div className="relative flex items-center justify-center">
                                <Image className="" src={images.earnCoin} alt="earncoin" />
                                <div className="absolute flex items-center justify-center text-start w-[141px] left-[50px]">
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
                            <div className="group-hover:hidden size-[32px]">
                                <Image src={images.effectHouse} alt="effectHouse" />
                            </div>
                            <div className="group-hover:block hidden size-[32px]">
                                <Image src={images.effectHouseHover} alt="effectHouseHover" />
                            </div>
                        </Button>
                        <div className="md:block hidden my-8 text-[14px] text-gray-400 tracking-wide ">
                            <h4>Company</h4>
                            <div className="pb-4 flex justify-start items-center text-[11px] children:text-gray-400  gap-3 hover:children:underline leading-5">
                                <a href="#">About</a>
                                <a href="#">Newsroom</a>
                                <a href="#">Contact</a>
                                <a href="#">Careers</a>
                            </div>
                            <h4>Program</h4>
                            <div className="pb-4 flex flex-wrap justify-start items-center text-[11px] children:text-gray-400  gap-4 hover:children:underline leading-5">
                                <a href="#">Tiktok for Good</a>
                                <a href="#">Advertise</a>
                                <a href="#">Titok LIVE Creator Networks</a>
                                <a href="#">Developers</a>
                                <a href="#">Transaprency</a>
                                <a href="#">Tiktok Rewards</a>
                                <a href="#">Tiktok Embeds</a>
                            </div>
                            <h4>Terms & Policies</h4>
                            <div className="pb-4 flex flex-wrap justify-start items-center text-[11px] children:text-gray-400  gap-4 hover:children:underline leading-5">
                                <a href="#">Help</a>
                                <a href="#">Sadety</a>
                                <a href="#">Terms</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Privacy Center</a>
                                <a href="#">Creator Academy</a>
                                <a href="#">Community Guidelines</a>
                            </div>
                            <h4>Program</h4>
                            <div className="pb-4 flex flex-wrap justify-start items-center text-[11px] children:text-gray-400  gap-4 hover:children:underline leading-5">
                                <a href="#">Dance</a>
                                <a href="#">Arts</a>
                                <a href="#">Food and Drinks</a>
                                <a href="#">Tourism</a>
                                <a href="#">Production and Manufacturing</a>
                                <a href="#">Vehicles and Transportation</a>
                                <a href="#">Relationship Tiktok Style</a>
                                <a href="#">Athletics</a>
                                <a href="#">Hobbies</a>
                            </div>
                            <span className="text-gray-400 text-[11px] font-sans">© 2024 TikTok</span>
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
