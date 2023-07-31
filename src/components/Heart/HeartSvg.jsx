import { useState } from "react";

const HeartSvg = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked)
  };

  const heartStyle = {
    fontSize: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: isLiked ? 'red' : 'black',
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-red-700 font-bold "
        style={heartStyle}
        onClick={handleHeartClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  );
};

export default HeartSvg;