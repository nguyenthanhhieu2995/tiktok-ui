import { Checked, Ellipsis } from '../../assets/svgs';

function AccountItem({ image, name, username }: { image: string; name: string; username: string }) {
    return (
        <div className="px-6 py-3 cursor-pointer font-display flex  items-center hover:bg-gray-100 group">
            <span className="rounded-full size-[40px] overflow-hidden inline-block mr-6 relative ">
                <img className="w-full h-full object-cover" src={image} alt={name} />
            </span>
            <div className="shrink-1 w-full">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <div className="flex gap-2 items-center]">
                            <h4 className="overflow-ellipsis overflow-hidden font-medium ">{name}</h4>
                            <span className='mt-1'><Checked /></span>
                        </div>
                        <p className="text-gray-500 leading-6">{username}</p>
                    </div>
                    <div className="size-[24px] ml-1">
                        <div className="group-hover:block hidden">
                            <Ellipsis />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;