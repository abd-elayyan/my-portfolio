export default function LinkedInIcon({
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
        <rect x="14" y="26" width="6" height="20" fill={color} />
        <circle cx="17" cy="18" r="3.5" fill={color} />
        <path
          d="M26 26H32V29C33.2 27 35.5 25.5 38.5 25.5C44 25.5 46 29 46 34.5V46H40V35.7C40 32.7 39.4 30.3 36.4 30.3C33.5 30.3 32 32.4 32 35.7V46H26V26Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
