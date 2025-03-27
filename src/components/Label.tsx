
interface ILabelProps {
  htmlFor: string;
  children: string;
}



export default function Label({htmlFor, children}: ILabelProps) {
  return <label className="text-[13px]" htmlFor={htmlFor}>{children}</label>
}