const SpigotMCIcon = ({ className = "", size = 24, strokeWidth = 2 }: { className?: string; size?: number; strokeWidth?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 17.12"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.22,4l-4.82,1.1h-.4c-1.1,0-2-.9-2-2s.9-2,2-2h.4l4.86,1" />
      <circle cx="11" cy="3.1" r="2" />
      <path d="M12.78,4l4.8,1h.4c1.1,0,2-.9,2-2s-.9-2-2-2h-.4l-4.92,1" />
      <path d="M11,5.1v3" />
      <rect x="17" y="9.1" width="4" height="6" />
      <path d="M21,8.1v8" />
      <path d="M17,10.1h-2.6c-1.02-1.88-3.37-2.57-5.25-1.55-.66.36-1.19.9-1.55,1.55h-1.6c-2.8,0-5,2.2-5,5v1h4v-1c0-.6.4-1,1-1h1.6c1.02,1.88,3.37,2.57,5.25,1.55.66-.36,1.19-.9,1.55-1.55h2.6" />
    </svg>
  );
};

export default SpigotMCIcon;
