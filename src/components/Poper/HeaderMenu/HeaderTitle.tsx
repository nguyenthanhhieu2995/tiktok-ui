import { Arrow } from "~/assets/svgs";
import Button from "~/components/Button";

interface HeaderProps {
    title: string;
    onBack?: () => void
}
function HeaderTitle({title, onBack} : HeaderProps) {
    return (
        <header className="flex flex-row justify-between items-center h-[50px] relative -mt-2">
            <Button noClassName style="border-0 size-[50px]" onClick={onBack}>
                <Arrow />
            </Button>
            <p className="absolute left-1/2 -translate-x-1/2">{title}</p>
        </header>
     );
}

export default HeaderTitle;