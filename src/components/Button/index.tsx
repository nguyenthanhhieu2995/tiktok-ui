import { Link } from 'react-router-dom';
import { cn } from '~/utils/cn';
type ButtonProps = {
    to?: string;
    href?: string;
    style?: string;
    target?: string;
    disabled?: boolean;
    noDefaultStyle?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
};

function Button({ to, href, style, disabled, noDefaultStyle, children, onClick, ...passProps }: ButtonProps) {
    let Comp: any = 'button';
    const props = {
        onClick,
        to: to || undefined,
        href: href || undefined,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        delete props.onClick
    }

    return (
        <Comp
            className={cn(
                noDefaultStyle ? '' : 'rounded min-h-9 min-w-28 flex justify-center items-center cursor-pointer px-4 py-2 ml-4 leading-5',
                style ? style : 'text-button', disabled ? 'pointer-events-none opacity-70 select-none' : ''
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Button;
