export default function CodeIcon({ size = 64, color = "#ffffff" }) {
  return (
    <div className="bg-white/10 rounded-full">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 20L11 32L24 44M40 20L53 32L40 44"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
