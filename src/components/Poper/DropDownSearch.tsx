import AccountItem from '~/components/AccountItem';
import { cn } from '~/utils/cn';

interface DropDownSearchProps {
    searchResult: object[];
    className?: string;
}

function DropDownSearch({ className, searchResult }: DropDownSearchProps) {
    return (
        <div
            className={cn(
                'bg-white w-full absolute left-0 z-50 rounded-xl  mt-2 pt-2 [box-shadow:rgba(0,_0,_0,_0.12)_0px_2px_12px]',
                className,
            )}
        >
            <p className="text-gray-500 px-3 py-4 font-display text-2xl">Accounts</p>
            {searchResult.map((item: any) => (
                <AccountItem
                    key={item.id}
                    image={item.avatar}
                    name={item.full_name}
                    username={item.nickname}
                    tick={item.tick}
                />
            ))}
        </div>
    );
}

export default DropDownSearch;
