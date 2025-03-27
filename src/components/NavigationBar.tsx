import IconButton from "./IconButton";

interface INavigationBarProps {
    isDark: boolean;
    showBackButton: boolean;  
    showCloseButton: boolean;
    showTitle: boolean;
    title?: string;
    onBackClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
    isDark,
    showBackButton,
    showCloseButton,
    showTitle,
    title ="",
    onBackClick = () => {},
    onCloseClick = () => {},
}: INavigationBarProps) {  
    return (
    <div className="w-full flex justify-between">
        {/*뒤로가기버튼*/}
        <div className="flex navigation-title">
            {showBackButton && <IconButton alt="뒤로" iconPath="/icons/leftArrow.svg" onClick={onBackClick}/>}
            {/*페이지이름*/}
            {showTitle  && <h1 className={`text-[#333] ${isDark? "text-[#fff]": "text-[#333]"}`}>{title}</h1>}
        </div>
        {/*닫기버튼*/}
        {showCloseButton && <IconButton alt="닫기" iconPath="/icons/maintap_colse_off.svg" onClick={onCloseClick}/>}
    </div>
    )
}