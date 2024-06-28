import { useState } from 'react';

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
}