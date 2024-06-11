import { Home, Following, Friends, Explore, Live } from '~/assets/svgs';
import avatar from '~/assets/images/avatar.jpeg';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="relative h-screen min-w-[240px] pr-2">
            <div className="top-[60px] min-w-[240px] pr-2  overflow-y-auto fixed z-50">
                <div className='pl-5 pt-7 flex flex-col items-stretch'>
                    <nav className='mb-2'>
                        <ul className=" space-y-2 font-medium">
                            <li>
                                <div>
                                    <Link
                                        to="/"
                                        className="flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-rose-600 group"
                                    >
                                        <div>
                                            <Home />
                                        </div>
                                        <span className="ml-2  ">For You</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        to="/following"
                                        className=" flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-[#fe2c55] group"
                                    >
                                        <div>
                                            <Following className="w-[32px] h-[32px] p-1.5" />
                                        </div>
                                        <span className="ml-2">Following</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        to="/friends"
                                        className=" flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-[#fe2c55] group"
                                    >
                                        <div>
                                            <Friends />
                                        </div>
                                        <span className="ml-2">Friends</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        to="/explore"
                                        className=" flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-[#fe2c55] group"
                                    >
                                        <div>
                                            <Explore className="w-[32px] h-[32px]" />
                                        </div>
                                        <span className="ml-2">Explore</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        to="/live"
                                        className=" flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-[#fe2c55] group"
                                    >
                                        <div>
                                            <Live />
                                        </div>
                                        <span className="ml-2">LIVE</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        to="/profile"
                                        className=" flex justify-start items-center p-2 text-gray-900 rounded hover:bg-gray-100 focus:text-[#fe2c55] group"
                                    >
                                        <div className="size-[32px]">
                                            <img className="rounded-full" src={avatar} alt="avatar" />
                                        </div>
                                        <span className="ml-2">Profile</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
