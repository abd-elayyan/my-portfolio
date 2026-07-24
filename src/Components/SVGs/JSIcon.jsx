export default function JsIcon({
  size = 64,
  color = "#000",
  className = "bg-white/10 rounded-full",
}) {
  return (
    <div className={`${className}`}>
      {" "}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          fontSize="24"
          fill={color}
        >
          JS
        </text>
      </svg>
    </div>
  );
}
