import Link from "next/link";
const Circle = (props: {
  icon: React.ReactNode;
  className: string;
  link: string;
}) => {
  return (
    <Link
      href={props.link}
      target="_blank"
      className={`absolute rounded-full border-[3px] bg-hlg-dark-gray p-4 duration-200 hover:scale-105 hover:cursor-pointer xl:p-8 ${props.className}`}
    >
      {props.icon}
    </Link>
  );
};

export default Circle;
