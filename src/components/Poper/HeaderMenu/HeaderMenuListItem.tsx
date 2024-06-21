import Button from '~/components/Button';
import { cn } from '~/utils/cn';

interface MoreMenuListItemProps {
    data: any
    onClick?: () => void;
    isSubMenu?: boolean;
}
function HeaderMenuListItem({ data, isSubMenu, onClick }: MoreMenuListItemProps) {
    return (
        <Button
            to={data.to ? data.to : ''}
            noDefaultStyle
            style={cn('flex flex-row items-center w-full gap-4 py-0 h-[44px] font-sans', isSubMenu ? 'h-[38px]' : '')}
            onClick={onClick}
        >
            {data.icon ? <div className="children:size-[20px]">{data.icon}</div> : ''}
            <span>{data.title}</span>
        </Button>
    );
}

export default HeaderMenuListItem;
