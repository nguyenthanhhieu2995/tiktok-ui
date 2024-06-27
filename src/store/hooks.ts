import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '.';
import { getSearchUser as getSearchUserAPI } from '~/apis/user';

export const useStore = () => useContext(StoreContext);

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

export const useGetUsers = (inputSearch: string) => {
    const [UsersResult, setUsersResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!inputSearch) {
            setUsersResult([]);
            return;
        }
        const getSearchUser = async () => {
            setIsLoading(true);
            try {
                const res = await getSearchUserAPI(inputSearch);
                setUsersResult(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setUsersResult([]);
                setIsLoading(false);
            }
        };
        getSearchUser();
    }, [inputSearch]);
    return { UsersResult, setUsersResult, isLoading };
};
