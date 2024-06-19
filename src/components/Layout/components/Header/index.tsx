import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import { useStore } from '~/store';
import { actions } from '~/state';

import avatar from '~/assets/images/avatar.jpeg';
import Button from '~/components/Button';
import Logo from '~/assets/svgs/logo.svg?react';
import { Search, Upload, Spinner, Ellipsis, Messages, Inbox } from '~/assets/svgs';
import DropDownSearch from '~/components/Poper/DropDownSearch';
import { PoperHeaderMoreMenu } from '~/components/Poper';

function Header() {
    const [state, dispatch] = useStore();

    const handleLogin = () => {
        dispatch(actions.logIn());
    };
    return (
        <header className=" bg-white border-gray-200 border-b-2 h-[60px] mx-auto px-8 w-full flex flex-row justify-between items-center fixed">
            <div className="min-w-[300px]">
                <a href="#">
                    <Logo />
                </a>
            </div>
            {/* Search */}
            <div className="relative w-[500px] min-w-48 hidden md:block px-2">
                <div className="relative">
                    <form
                        id="search-form"
                        action="#"
                        className="relative font-display flex flex-row items-center p-4 bg-gray-100 rounded-full border border-gray-50 pointer-events-none hover:border-gray-300 group "
                    >
                        <input
                            placeholder="Search"
                            type="search"
                            className=" bg-transparent outline-none focus:outline-none px-3 w-full caret-rose-600 text-gray-700 pointer-events-auto peer placeholder-gray-500"
                        />
                        <Spinner className="absolute right-28 animate-spin fill-gray-500 hidden" />
                        <span className="w-[0.4px] h-12 -my-2 bg-gray-300"></span>
                        <button
                            type="submit"
                            className="pl-4 pr-6 py-4 ml-0 -mr-4 -my-4 bg-transparent pointer-events-auto rounded-r-full peer-hover:bg-gray-300 hover:bg-gray-300"
                        >
                            <div className="outline-none">
                                <Search className="group-hover:fill-gray-700" />
                            </div>
                        </button>
                    </form>
                    {/* {dropdown search} */}
                    <DropDownSearch />
                </div>
            </div>
            {/* Action header */}

            <div className="flex flex-row mt-1 ">
                <Button style="text-button px-6" to="/upload">
                    <Upload className="size-[20px] mr-2 ml-3" />
                    Upload
                </Button>

                {state.isLogin ? (
                    <div className="flex items-center space-x-8 ml-16">
                        <Tippy content="Messages" >
                            <Link to="/messages">
                                <Messages className="size-[26px]" />
                            </Link>
                        </Tippy>
                        <Tippy content="Inbox" >
                            <Link to="/inbox">
                                <Inbox />
                            </Link>
                        </Tippy>
                        <PoperHeaderMoreMenu isLogin={state.isLogin}>
                            <div className="size-[32px]">
                                <img className="rounded-full" src={avatar} alt="avatar" />
                            </div>
                        </PoperHeaderMoreMenu>
                    </div>
                ) : (
                    <>
                        <Button style="primary-button" onClick={() => handleLogin()}>
                            Login
                        </Button>
                        <PoperHeaderMoreMenu isLogin={state.isLogin}>
                            <div>
                                <Button style="border-none min-w-[32px] py-0">
                                    <Ellipsis className="rotate-90 size-[20px]" />
                                </Button>
                            </div>
                        </PoperHeaderMoreMenu>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
