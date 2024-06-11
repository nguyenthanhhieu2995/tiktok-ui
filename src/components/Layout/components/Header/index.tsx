import { Link } from "react-router-dom";
import Logo from "~/assets/svgs/logo.svg?react";
import { Messages, Search, Upload, Inbox, Spinner } from "~/assets/svgs";
import avatar from "~/assets/images/avatar.jpeg";

function Header() {
    return (
        <header className=" bg-white border-gray-200 border-b-2 h-[60px] mx-auto px-6 w-full flex flex-row justify-between items-center fixed">
            <div className="min-w-[300px]">
                <a href="#">
                    <Logo />
                </a>
            </div>
            <div className="w-[500px] min-w-48 hidden md:inline-block px-2">
                <form
                    action="#"
                    className="relative font-display flex flex-row items-center p-4 bg-gray-100 rounded-full border border-gray-50 pointer-events-none hover:border-gray-400 group "
                >
                    <input
                        placeholder="Search"
                        type="search"
                        className=" bg-transparent outline-none focus:outline-none px-3 w-full caret-rose-600 text-gray-700 pointer-events-auto peer placeholder-gray-500"
                    />
                    <Spinner className="absolute right-28 animate-spin fill-gray-500 hidden"/>
                    <span className="w-[0.4px] h-12 -my-2 bg-gray-300"></span>
                    <button
                        type="submit"
                        className="pl-6 pr-6 py-4 ml-0 -mr-4 -my-4 bg-transparent pointer-events-auto rounded-r-full peer-hover:bg-gray-300 hover:bg-gray-300"
                    >
                        <div className="outline-none">
                            <Search className="group-hover:fill-gray-700" />
                        </div>
                    </button>
                </form>
            </div>
            <div className="flex flex-row  gap-16">
                <div className="min-w-28 px-3 h-16 border border-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-100">
                    <a href="#">
                        <div className="flex items-center px-4">
                            <Upload className="size-[20px] mr-2" />
                            <span className="ml-2 font-display">Upload </span>
                        </div>
                    </a>
                </div>

                <div className="flex items-center space-x-8">
                    <Link to="/messages"><Messages className="size-[26px]" /></Link>
                    <a href="#"><Inbox /></a>
                    <div className="size-[32px]">
                        <img className="rounded-full" src={avatar} alt="avatar" />
                    </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
