export default function CssIcon({ size = 64, color = "#000" }) {
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
          d="M20 20H44L42.2 40.4L31.9 43.4L21.7 40.4L21 33H25.3L25.6 36.9L31.9 38.7L38.2 36.9L38.6 31.6H20.6L20 20Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
