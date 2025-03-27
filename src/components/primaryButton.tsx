interface IPrimaryButtonProps {
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({ children, onClick}: IPrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
        >
            {children}
        </button>
    );
}