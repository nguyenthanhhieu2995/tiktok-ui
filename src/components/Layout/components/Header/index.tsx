import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Upload, Ellipsis, Messages, Inbox, Logo } from '~/assets/svgs';

import { avatar } from '~/assets/images';
import { useStore, useModal } from '~/hooks';
import Button from '~/components/Button';
import { PoperHeaderMoreMenu } from '~/components/Poper';
import Login from '~/components/Modal/Login';
import Image from '~/components/Image';
import Search from '~/components/Search';

function Header() {
    const [state, dispatch] = useStore();
    const { isShowing, showModal, hideModal } = useModal();
    return (
        <header className=" bg-white border-gray-200 border-b-[1.5px] h-[60px] mx-auto px-8 w-full flex flex-row justify-between items-center fixed">
            <div className="min-w-[300px]">
                
                    <Logo onClick={() => window.location.assign('/')} />
                
            </div>
            {/* Search */}
            <div className="relative w-[500px] min-w-48 hidden md:block px-2">
                <Search />
            </div>
            {/* Action header */}
            <div className="flex flex-row mt-1 items-center">
                <Button style="text-button px-6" to="/upload">
                    <Upload className="size-[20px] min-h-5 " />
                    <p>Upload</p>
                </Button>
                {state.isLogin ? (
                    <div className="flex items-center space-x-8 ml-16">
                        <Tippy content="Messages">
                            <Link to="/messages">
                                <Messages className="size-[26px]" />
                            </Link>
                        </Tippy>
                        <Tippy content="Inbox">
                            <Link to="/inbox">
                                <Inbox />
                            </Link>
                        </Tippy>
                        <PoperHeaderMoreMenu isLogin={state.isLogin}>
                            <Image src={avatar} alt={'avatar'} className="w-[32px] h-[32px] rounded-full" />
                        </PoperHeaderMoreMenu>
                    </div>
                ) : (
                    <>
                        <Button style="primary-button" onClick={() => showModal()}>
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
            <Login isShowing={isShowing} hideModal={hideModal} />
        </header>
    );
}

export default Header;
