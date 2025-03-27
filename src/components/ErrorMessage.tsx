
interface IErrorMessageProps {
    children: string;
  }

export default function ErrorMessage({children}: IErrorMessageProps) {
    return <p className="text-[12px] text-error">{children}</p>
}