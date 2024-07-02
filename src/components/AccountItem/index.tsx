import { Link } from 'react-router-dom';
import { Checked } from '~/assets/svgs';
import Image from '~/components/Image';

interface AccountItemProps {
    image: string;
    name: string;
    username: string;
    tick?: boolean;
}
function AccountItem({ image, name, username, tick }: AccountItemProps) {
    return (
        <Link to={`/@${username}`} className="px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 group">
            <div className="rounded-full size-10 overflow-hidden inline-block mr-4 relative ">
                <Image className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="shrink-1 w-full leading-5">
                <div className="flex gap-2 items-center">
                    <p className="overflow-ellipsis overflow-hidden font-displaysemibol">{name}</p>
                    {tick && (
                        <span className="mb-3">
                            <Checked />
                        </span>
                    )}
                </div>
                <p className="text-gray-400 font-sans ">{username}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
