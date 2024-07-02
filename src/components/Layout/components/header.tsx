import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { cn } from '~/utils/cn';
import routesConfig from '~/config/routes';
import { useStore, useModal } from '~/hooks';
import { Upload, Ellipsis, Messages, Inbox, Logo } from '~/assets/svgs';
import { avatar } from '~/assets/images';
import Button from '~/components/Button';
import { PoperHeaderMoreMenu } from '~/components/Poper';
import Login from '~/components/Modal/Login';
import Image from '~/components/Image';
import Search from '~/components/Search';

function Header({ center }: { center?: boolean }) {
    const [state, dispatch] = useStore();
    const { isShowing, showModal, hideModal } = useModal();
    return (
        <header
            className={cn(
                ' bg-white border-gray-200 border-b-[1.5px] h-[60px] px-8 w-full flex flex-row justify-between items-center fixed top-0 left-0',
                center ? 'px-40' : '',
            )}
        >
            <Link to={routesConfig.root} className="min-w-80">
                <Logo />
            </Link>
            {/* Search */}
            <div className="relative w-[500px] min-w-48 hidden md:block px-2">
                <Search />
            </div>
            {/* Action header */}
            <div className="flex flex-row mt-1 items-center">
                <Button style="text-button px-5" to="/upload">
                    <Upload className="size-4 min-h-5 " />
                    <p>Upload</p>
                </Button>
                {state.isLogin ? (
                    <div className="flex items-center space-x-6 ml-12">
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
                            <Image src={avatar} alt={'avatar'} className="size-8 rounded-full" />
                        </PoperHeaderMoreMenu>
                    </div>
                ) : (
                    <>
                        <Button style="primary-button" onClick={() => showModal()}>
                            Login
                        </Button>
                        <PoperHeaderMoreMenu isLogin={state.isLogin}>
                            <div className='cursor-pointer ml-4 p-2'>
                                <Ellipsis className="rotate-90 size-5" />
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
