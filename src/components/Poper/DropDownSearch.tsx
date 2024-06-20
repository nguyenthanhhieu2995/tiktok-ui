import AccountItem from '~/components/AccountItem';
import { messi, ronaldo, klopp, sontung } from '~/assets/images/avatarSearch';
function DropDownSearch() {
    return (
        <div className="bg-white block w-full absolute z-50 rounded-xl mt-2 pt-2 min-h-52 max-h-[calc(min(100vh-156px,734px))] overflow-x-hidden overflow-y-auto [box-shadow:rgba(0,_0,_0,_0.12)_0px_2px_12px]">
            <p className="text-gray-500 px-3 py-4 font-display text-2xl">Accounts</p>
            <AccountItem image={messi} name={'Messi'} username={'@messi'} />
            <AccountItem image={ronaldo} name={'Ronaldo'} username={'@ronaldo'} />
            <AccountItem image={klopp} name={'Klopp'} username={'@klopp'} />
            <AccountItem image={sontung} name={'Sontung'} username={'@sontung'} />
        </div>
    );
}

export default DropDownSearch;
