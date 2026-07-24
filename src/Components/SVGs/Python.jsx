export default function PythonIcon({ size = 64, color = "#000" }) {
  return (
    <div className="bg-white/10 rounded-full">
      {" "}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 16c-3.3 0-6 .7-6 3.5V24h6.5v1.5H20c-2.8 0-5.2 2-5.2 6.5s2.4 6.5 5.2 6.5h3v-4.5c0-3 2.6-5.5 6-5.5h6c2.6 0 4.7-2 4.7-4.5v-4c0-2.5-2.4-3.5-5.7-3.5H32z"
          fill={color}
        />
        <path
          d="M32 48c3.3 0 6-.7 6-3.5V40h-6.5v-1.5H44c2.8 0 5.2-2 5.2-6.5s-2.4-6.5-5.2-6.5h-3v4.5c0 3-2.6 5.5-6 5.5h-6c-2.6 0-4.7 2-4.7 4.5v4c0 2.5 2.4 3.5 5.7 3.5H32z"
          fill={color}
        />
        <circle cx="26" cy="20" r="1.4" fill="#fff" />
        <circle cx="38" cy="44" r="1.4" fill="#fff" />
      </svg>
    </div>
  );
}
