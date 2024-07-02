import  request from '~/utils/request';

const getSearchUser = async (inputSearch: string, type = 'less') => {
    const res = await request.get('users/search', {
        params: {
            q: inputSearch,
            type,
        },
    });
    return res.data
};

export { getSearchUser };
