const MongoDBIcon = ({ className = "", size = 24, strokeWidth = 2 }: { className?: string; size?: number; strokeWidth?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M405.74,349.25c-5.47-.03-5.47,165.69-5.47,165.69,0,12.89,7.66,47.16,15.26,48.07,0,0-5.52-213.76-9.79-213.76Z" />
      <path d="M400,0C179.09,0,0,179.09,0,400s179.09,400,400,400,400-179.09,400-400S620.91,0,400,0ZM438.15,564.63l-.56.51c-4.96,4.61-10.21,8.91-15.71,12.85l-.78.51c-4.5,20.25-7.89,40.73-10.16,61.35h-9.64c-2.69-29.17-6.52-56.7-6.59-57.3v.09l-1.4-.99c-12.3-8.98-103.29-79.38-97.66-197.54,6.04-126.69,80.27-188.98,94.74-200.29,9.34-9.97,9.72-13.78,10.45-23.66.22.51.41,1.03.52,1.33,0,0,7.12,17.58,14.16,27.46,6.43,14.01,66.14,50.67,91.41,162.18h0c2.53,14.65,3.85,29.48,3.95,44.34.46,89.11-46.56,145-72.72,169.16Z" />{" "}
    </svg>
  );
};

export default MongoDBIcon;
