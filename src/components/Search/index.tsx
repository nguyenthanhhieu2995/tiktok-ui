import { useState, useRef} from 'react';
import { useGetUsers,useDebounce } from '~/hooks';

import { DropDownSearch } from '../Poper';
import { Spinner, SearchIcon, CancelSearch } from '~/assets/svgs';

function Search() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showResult, setShowResult] = useState(true);
    const [inputSearch, setInputSearch] = useState('');
    const  [hideDropDown,setHideDropDown] = useState('');

    const debounced = useDebounce(inputSearch, 500);
    const { UsersResult, setUsersResult, isLoading } = useGetUsers(debounced);

    const handleChangeInput = (e: any) => {
        e = e.trimStart();
        setInputSearch(e);
    };

    const handleOnBlur = () => {
        setHideDropDown('opacity-0');
        setTimeout(() => {
            setShowResult(false);
            setHideDropDown('');
        },250);
    };

    const handleClearInput = () => {
        setInputSearch('');
        setUsersResult([]);
        inputRef.current?.focus();
    };
    return (
        <div>
            <form
                id="search-form"
                action="#"
                className="p-4 font-display flex flex-row items-center bg-gray-100 rounded-full border border-gray-50 pointer-events-none hover:border-gray-300 group "
            >
                <input
                    ref={inputRef}
                    value={inputSearch}
                    onChange={(e) => handleChangeInput(e.target.value)}
                    onBlur={() => handleOnBlur()}
                    onFocus={() => setShowResult(true)}
                    placeholder="Search"
                    className="px-2 bg-transparent outline-none focus:outline-none w-full caret-rose-600 text-gray-700 pointer-events-auto peer placeholder-gray-500"
                />
                {isLoading && <Spinner className="absolute right-28 animate-spin fill-gray-500 " />}{' '}
                {inputSearch.length > 0 && !isLoading && (
                    <CancelSearch className="mx-6 size-[17px] pointer-events-auto" onClick={handleClearInput} />
                )}
                <span className="w-[0.4px] h-12 -my-2 bg-gray-300"></span>
                <button
                    type="submit"
                    className="pl-4 pr-6 py-4 ml-0 -mr-4 -my-4 bg-transparent pointer-events-auto rounded-r-full peer-hover:bg-gray-300 hover:bg-gray-300"
                >
                    <SearchIcon className="group-hover:fill-gray-700 outline-none" />
                </button>
            </form>
            {/* {dropdown search} */}
            {UsersResult.length > 0 && showResult && <DropDownSearch searchResult={UsersResult} className={hideDropDown} />}
        </div>
    );
}

export default Search;
