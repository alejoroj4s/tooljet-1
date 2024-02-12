import React from 'react';

const Page = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.70801 10.167C7.70801 8.78628 8.8273 7.66699 10.208 7.66699H18.5413C19.9221 7.66699 21.0413 8.78628 21.0413 10.167V19.7503H13.7913C13.4232 19.7503 13.1247 20.0488 13.1247 20.417C13.1247 21.8898 11.9101 23.0837 10.4373 23.0837C8.94156 23.0837 7.70801 21.8711 7.70801 20.3753V10.167ZM11.0413 11.2087C10.6962 11.2087 10.4163 11.4885 10.4163 11.8337C10.4163 12.1788 10.6962 12.4587 11.0413 12.4587H17.708C18.0532 12.4587 18.333 12.1788 18.333 11.8337C18.333 11.4885 18.0532 11.2087 17.708 11.2087H11.0413ZM10.4163 16.0003C10.4163 15.6551 10.6962 15.3753 11.0413 15.3753H14.3747C14.7199 15.3753 14.9997 15.6551 14.9997 16.0003C14.9997 16.3455 14.7199 16.6253 14.3747 16.6253H11.0413C10.6962 16.6253 10.4163 16.3455 10.4163 16.0003Z"
      fill={fill}
    />
    <path
      d="M24.2718 21.8252C23.9047 23.2672 22.5976 24.3337 21.0413 24.3337H11.0413C12.5976 24.3337 13.9047 23.2672 14.2718 21.8252C14.3854 21.3792 14.7478 21.0003 15.208 21.0003H23.5413C24.0016 21.0003 24.3854 21.3792 24.2718 21.8252Z"
      fill={fill}
    />
  </svg>
);

export default Page;