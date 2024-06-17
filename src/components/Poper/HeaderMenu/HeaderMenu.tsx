import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { LiveCreatorHub, Language, Feedback, KeyboardShortcut, DarkMode } from '~/assets/svgs';
import { ToggleButton } from '~/components/Poper';
import HeaderMenuListItem from './HeaderMenuListItem';
import HeaderTitle from './HeaderTitle';
import Wrapper from '../Wrapper';

const MENU_ITEMS = [
    {
        icon: <LiveCreatorHub />,
        title: 'Live Creator Hub',
        to: '/live-creator-hub',
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
        icon: <KeyboardShortcut />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkMode />,
        title: 'Dark mode',
    },
];


function PoperHeaderMoreMenu({ children}: {children: React.ReactElement}) {
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const onChange = (item:any) => {
        switch (item.type) {
            case 'language':
                console.log(item);
                break;
            default:
                break;
        }
    }

    const [history, setHistory] = useState([{ data: MENU_ITEMS }]);
    const current = history[history.length - 1];
    const isSubMenu = history.length > 1;
    const renderItems = () => {
        return current.data.map((item) => {
            const isParent = !!item.children;
            const handleClickMenuItem = (item: any) => {
                if (isParent) {
                    setHistory((prev) => {
                        const newHistory = [...prev, item.children];                       
                        console.log("current: ", item.children);
                        return newHistory;
                    });
                } else onChange(item);
            };

            return (
                <li key={item.title}>
                    <HeaderMenuListItem isSubMenu={isSubMenu} data={item} onClick={() => handleClickMenuItem(item)} />
                    {item.title === 'Dark mode' && <ToggleButton />}
                </li>
            );
        });
    };
    return (
        <Tippy
            delay={[0, 1000]}
            interactive
            render={(attrs) => (
                <div
                    className="min-w-[224px] font-display leading-6 relative -mt-4"
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
        >
            {children}
        </Tippy>
    );
}

export default PoperHeaderMoreMenu;
