import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '.';

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const showModal = () => {
        setIsShowing(true);
    };
    const hideModal = () => {
        setIsShowing(false);
    };
    return {
        isShowing,
        showModal,
        hideModal,
    };
};

export const useStore = () => useContext(StoreContext);
