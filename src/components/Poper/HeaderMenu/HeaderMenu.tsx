import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useStore } from '~/store';
import { actions } from '~/state';

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
} from '~/assets/svgs';
import { ToggleButton } from '~/components/Poper';
import HeaderMenuListItem from './HeaderMenuListItem';
import HeaderTitle from './HeaderTitle';
import Wrapper from '../Wrapper';

import ModalKeyBoardShorcuts from '~/components/Modal/ModalKeyBoardShorcuts';
import { useModal } from '~/store';
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
        icon: <LiveCreatorHub />,
        title: 'Live Creator Hub',
        to: '/live-creator-hub',
    },
    {
        icon: <Settings />,
        title: 'Settings',
        to: '/settings',
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
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        type: 'keyboardShortcut',
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
        type: 'Log out',
        requireLogin: true,
    },
];

interface PoperHeaderMoreMenuProps {
    isLogin: boolean;
    children: React.ReactElement;
}

function PoperHeaderMoreMenu({ isLogin, children }: PoperHeaderMoreMenuProps) {
    const [state,dispatch] = useStore();
    const { isShowing, showModal, hideModal } = useModal();
    const [history, setHistory] = useState([{ data: MENU_ITEMS }]);
    const current = history[history.length - 1];
    const isSubMenu = history.length > 1;

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const onChange = (item: any) => {
        switch (item.type) {
            case 'language':
                console.log(item);
                // write logic language here
                break;
            case 'keyboardShortcut':
                showModal();
                console.log();
                break;
            case 'Log out':
                console.log('log out');
                dispatch(actions.logOut());
                break;
            default:
                break;
        }
    };

    const renderItems = () => {
        return current.data
            .filter((item) => isLogin || !item.requireLogin)
            .map((item) => {
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
                    <li key={item.title} className={`${item.title === 'Log out' ? 'border-t' : ''}`}>
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
                
                delay={[0, 500]}
                interactive
                offset={[10, 0]}
                placement="bottom-start"
                render={(attrs) => (
                    <div
                        className="min-w-[224px] font-display leading-6"
                        id="tooltip"
                        role="tooltip"
                        tabIndex={-1}
                        {...attrs}
                    >
                        <Wrapper>
                            <ul className="children:flex children:justify-between children:px-7 children:items-center hover:children:bg-gray-100">
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
