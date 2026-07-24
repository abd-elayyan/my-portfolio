export default function ReactIcon({
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
        <circle cx="32" cy="32" r="3.5" fill={color} />
        <g stroke={color} strokeWidth="2" fill="none">
          <ellipse cx="32" cy="32" rx="22" ry="9" />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="9"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="9"
            transform="rotate(120 32 32)"
          />
        </g>
      </svg>
    </div>
  );
}
