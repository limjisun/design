interface IPrimaryButtonProps {
    iconPath: string;
    iconAlt: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export default function TestButton({ iconPath,iconAlt,text, onClick}: IPrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className="border pl-[22px] pr-[22px] flex flex-col items-center"
        >
           <img alt={iconAlt} src={iconPath}/>
           <p>{text}</p>
        </button>
    );
}