import { Arrow } from "~/assets/svgs";
import Button from "~/components/Button";

interface HeaderProps {
    title: string;
    onBack?: () => void
}
function HeaderTitle({title, onBack} : HeaderProps) {
    return (
        <header className="flex flex-row justify-between items-center h-12 relative -mt-2">
            <Button noDefaultStyle style="size-12 grid place-content-center" onClick={onBack}>
                <Arrow className="" />
            </Button>
            <p className="absolute left-1/2 -translate-x-1/2">{title}</p>
        </header>
     );
}

export default HeaderTitle;