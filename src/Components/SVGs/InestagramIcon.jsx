export default function InstagramIcon({
  size = 64,
  color = "#000",
  className = "bg-white/10 rounded-full",
}) {
  return (
    <div className={`${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="14"
          y="14"
          width="36"
          height="36"
          rx="10"
          stroke={color}
          strokeWidth="3.5"
        />
        <circle cx="32" cy="32" r="9" stroke={color} strokeWidth="3.5" />
        <circle cx="41.5" cy="22.5" r="2" fill={color} />
      </svg>
    </div>
  );
}
