import { Checked, Ellipsis } from '../../assets/svgs';
import Image from '../../components/Image';

function AccountItem({ image, name, username }: { image: string; name: string; username: string }) {
    return (
        <div className="px-6 my-3 cursor-pointer font-displaysemibold flex items-center hover:bg-gray-100 group">
            <div className="rounded-full size-[40px] overflow-hidden inline-block mr-6 relative ">
                <Image className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="shrink-1 w-full">
                <div>
                    <div className="flex gap-2 items-center">
                        <h4 className="overflow-ellipsis overflow-hidden font-medium ">{name}</h4>
                        <span className="mb-3">
                            <Checked />
                        </span>
                    </div>
                    <p className="text-gray-400 leading-5 font-sans ">{username}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
