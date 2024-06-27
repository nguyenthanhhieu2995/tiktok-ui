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
        <Link to={`/@${username}`} className="px-6 my-3 cursor-pointer font-displaysemibold flex items-center hover:bg-gray-100 group">
            <div className="rounded-full size-[40px] overflow-hidden inline-block mr-6 relative ">
                <Image className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="shrink-1 w-full">
                <div>
                    <div className="flex gap-2 items-center">
                        <h4 className="overflow-ellipsis overflow-hidden font-medium ">{name}</h4>
                        {tick && (
                            <span className="mb-3">
                                <Checked />
                            </span>
                        )}
                    </div>
                    <p className="text-gray-400 leading-5 font-sans ">{username}</p>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
