import { SVGProps } from 'react';

const SortIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
        fill="#333333"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25L18 6.25C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75L6 7.75C5.58579 7.75 5.25 7.41421 5.25 7Z"
        fill="#333333"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.25 17C9.25 16.5858 9.58579 16.25 10 16.25L14 16.25C14.4142 16.25 14.75 16.5858 14.75 17C14.75 17.4142 14.4142 17.75 14 17.75L10 17.75C9.58579 17.75 9.25 17.4142 9.25 17Z"
        fill="#333333"
      />
    </svg>
  );
};

export default SortIcon;
