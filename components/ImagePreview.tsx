import React from 'react';

interface ImagePreviewProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  width = "1200",
  height = "1200",
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 1200 1200"
    >
      <rect width="1200" height="1200" fill="#EAEAEA" rx="3" />
      <g opacity=".5">
        <g opacity=".5">
          <path
            fill="#FAFAFA"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
          <path
            stroke="#C9C9C9"
            strokeWidth="2.418"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
        </g>
        <path
          stroke="url(#a)"
          strokeWidth="2.418"
          d="M0-1.209h553.581"
          transform="scale(1 -1) rotate(45 1163.11 91.165)"
        />
        <path stroke="url(#b)" strokeWidth="2.418" d="M404.846 598.671h391.726" />
        <path stroke="url(#c)" strokeWidth="2.418" d="M599.5 795.742V404.017" />
        <path
          stroke="url(#d)"
          strokeWidth="2.418"
          d="m795.717 796.597-391.441-391.44"
        />
        <path
          fill="#fff"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
        <g clipPath="url(#e)">
          <path
            fill="#666"
            fillRule="evenodd"
            d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z"
            clipRule="evenodd"
          />
        </g>
        <path
          stroke="#C9C9C9"
          strokeWidth="2.418"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
      </g>
      {/* Add your linear gradients and clip paths here */}
      <defs>
        <linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        {/* Define other linearGradients and clipPaths */}
      </defs>
    </svg>
  );
};

export default ImagePreview;