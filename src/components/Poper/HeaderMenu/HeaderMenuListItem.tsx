import Button from '~/components/Button';
import { cn } from '~/utils/cn';

interface MoreMenuListItemProps {
    data: {
        icon?: React.ReactNode;
        title: string;
        to?: string;
    };
    onClick?: () => void;
    isSubMenu?: boolean;
}
function HeaderMenuListItem({ data, isSubMenu, onClick }: MoreMenuListItemProps) {
    return (
        <Button
            to={data.to ? data.to : ''}
            noClassName
            style={cn(
                "flex flex-row items-center w-full gap-4 py-0 h-[44px]",
                isSubMenu ? 'h-[38px]' : ''
            )}
            onClick={onClick}
        >
            {data.icon ? <div className="children:size-[20px]">{data.icon}</div> : ''}
            <span >{data.title}</span>
        </Button>
    );
}

export default HeaderMenuListItem;
