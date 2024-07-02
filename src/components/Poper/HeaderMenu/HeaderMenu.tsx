import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import { useStore, useModal } from '~/hooks';
import { actions } from '~/state';
import routesConfig from '~/config/routes';
import {
    LiveCreatorHub,
    Language,
    Feedback,
    KeyboardShortcut,
    DarkMode,
    Profile,
    Favorites,
    Settings,
    Logout,
    Coin,
} from '~/assets/svgs';
import { ToggleButton } from '~/components/Poper';
import HeaderMenuListItem from './HeaderMenuListItem';
import HeaderTitle from './HeaderTitle';
import Wrapper from '~/components/Poper/Wrapper';
import ModalKeyBoardShorcuts from '~/components/Modal/ModalKeyBoardShorcuts';


const MENU_ITEMS = [
    {
        icon: <Profile />,
        title: 'View profile',
        requireLogin: true,
    },
    {
        icon: <Favorites />,
        title: 'Favorite',
        requireLogin: true,
    },
    {
        icon: <Coin />,
        title: 'Get Coins',
        requireLogin: true,
    },
    {
        icon: <LiveCreatorHub />,
        title: 'LIVE Creator Hub',
        to: routesConfig.liveCreatorHub,
    },
    {
        icon: <Settings />,
        title: 'Settings',
        to: routesConfig.setting,
        requireLogin: true,
    },
    {
        icon: <Language />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                }
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        to: routesConfig.feedback,
    },
    {
        icon: <KeyboardShortcut />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkMode />,
        title: 'Dark mode',
    },
    {
        icon: <Logout />,
        title: 'Log out',
        requireLogin: true,
    },
];

interface PoperHeaderMoreMenuProps {
    isLogin: boolean;
    children: React.ReactElement;
}

function PoperHeaderMoreMenu({ isLogin, children }: PoperHeaderMoreMenuProps) {
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { isShowing, showModal, hideModal } = useModal();
    const [history, setHistory] = useState([{ data: MENU_ITEMS }]);
    const current = history[history.length - 1];
    const isSubMenu = history.length > 1;

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const onChange = (item: any) => {
        if (item.type === 'language') {
            // write logic language here
        }
        switch (item.title) {
            case 'Keyboard shortcuts':
                showModal();
                break;
            case 'Log out':
                console.log('log out');
                dispatch(actions.logOut());
                break;
            case 'Feedback and help':
                navigate(routesConfig.feedback);
                break;
            case 'Get Coins':
                navigate(routesConfig.getCoin);
                break;
            default:
                break;
        }
    };

    const renderItems = () => {
        return current.data
            .filter((item) => isLogin || !item.requireLogin)
            .map((item, index) => {
                const isParent = !!item.children;
                const handleClickMenuItem = (item: any) => {
                    if (isParent) {
                        setHistory((prev) => {
                            const newHistory = [...prev, item.children];
                            console.log('current: ', item.children);
                            return newHistory;
                        });
                    } else onChange(item);
                };

                return (
                    <li key={index} className={`flex items-center  hover:bg-gray-100 ${item.title === 'Log out' ? 'border-t' : ''}`}>
                        <HeaderMenuListItem
                            isSubMenu={isSubMenu}
                            data={item}
                            onClick={() => handleClickMenuItem(item)}
                        />
                        {item.title === 'Dark mode' && <ToggleButton />}
                    </li>
                );
            });
    };
    return (
        <>
            <HeadlessTippy
                delay={[0, 600]}
                interactive
                offset={[20, 0]}
                placement="bottom-end"
                render={(attrs) => (
                    <div
                        className="min-w-[224px] overflow-y-auto h-[550px]"
                        id="tooltip"
                        role="tooltip"
                        tabIndex={-1}
                        {...attrs}
                    >
                        <Wrapper>
                            <ul className="children:flex children:justify-between children:px-3">
                                {isSubMenu && <HeaderTitle title="Language" onBack={handleBack}></HeaderTitle>}
                                {renderItems()}
                            </ul>
                        </Wrapper>
                    </div>
                )}
                onHidden={() => setHistory((prev) => prev.slice(0, 1))}
                hideOnClick={false}
                trigger="mouseenter"
            >
                {children}
            </HeadlessTippy>
            <ModalKeyBoardShorcuts isShowing={isShowing} hideModal={hideModal} />
        </>
    );
}

export default PoperHeaderMoreMenu;
