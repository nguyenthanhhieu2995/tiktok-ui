import Button from '~/components/Button';
import { cn } from '~/utils/cn';

interface MoreMenuListItemProps {
    data: any;
    onClick?: () => void;
    isSubMenu?: boolean;
}
function HeaderMenuListItem({ data, isSubMenu, onClick }: MoreMenuListItemProps) {
    return (
        <Button
            to={data.to ? data.to : ''}
            noDefaultStyle
            style={cn('flex flex-row items-center w-full gap-3 h-10 font-sans', isSubMenu ? 'h-9' : '')}
            onClick={onClick}
        >
            {data.icon ? <div className="children:size-5">{data.icon}</div> : ''}
            <span className='pl-2'>{data.title}</span>
        </Button>
    );
}

export default HeaderMenuListItem;
