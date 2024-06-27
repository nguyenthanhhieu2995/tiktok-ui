import { configs } from '~/config/env';

export const getSearchUser = async (inputSearch:string) => {
    const res = await fetch(
        `${configs.API_URL}users/search?q=${encodeURIComponent(inputSearch)}&type=less`,
    );
    const json = await res.json();
    return json;
};
