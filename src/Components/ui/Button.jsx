import Link from "next/link";

export const Button = ({
  title,
  href,
  onClick,
  varient = "secondary",
  ClassName,
}) => {
  const baseStyle =
    " py-4 px-6 rounded-full text-sm flex items-center justify-center cursor-pointer duration-300";

  const varients = { primary: "bg-white text-[#2f2f2f]", secondary: "border" };

  const selectStyle = `${baseStyle} ${varients[varient]} ${ClassName}`;

  if (href) {
    return (
      <Link href={href} className={selectStyle}>
        {title}
        {""}
      </Link>
    );
  }

  return (
    <div>
      <button onClick={onClick} className={`${selectStyle} `}>
        {title}
      </button>
    </div>
  );
};
