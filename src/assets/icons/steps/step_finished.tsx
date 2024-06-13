import { SVGProps } from 'react';

const StepFinished = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="40" height="40" rx="20" fill="#333333" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.7071 15.2929C27.0976 15.6834 27.0976 16.3166 26.7071 16.7071L18.7071 24.7071C18.3166 25.0976 17.6834 25.0976 17.2929 24.7071L13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929C13.6834 18.9024 14.3166 18.9024 14.7071 19.2929L18 22.5858L25.2929 15.2929C25.6834 14.9024 26.3166 14.9024 26.7071 15.2929Z"
      fill="white"
    />
  </svg>
);
export default StepFinished;
