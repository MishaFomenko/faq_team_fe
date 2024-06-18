import { SVGProps } from 'react';

const FirstStepActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="1"
      y="1"
      width="38"
      height="38"
      rx="19"
      stroke="#333333"
      strokeWidth="2"
    />
    <path
      d="M17.414 25.168C16.5273 25.168 15.762 24.958 15.118 24.538C14.4833 24.1087 13.9933 23.516 13.648 22.76C13.312 21.9947 13.144 21.108 13.144 20.1C13.144 19.092 13.312 18.21 13.648 17.454C13.9933 16.6887 14.4833 16.096 15.118 15.676C15.762 15.2467 16.5273 15.032 17.414 15.032C18.3007 15.032 19.0613 15.2467 19.696 15.676C20.3307 16.096 20.816 16.6887 21.152 17.454C21.4973 18.21 21.67 19.092 21.67 20.1C21.67 21.108 21.4973 21.9947 21.152 22.76C20.816 23.516 20.3307 24.1087 19.696 24.538C19.0613 24.958 18.3007 25.168 17.414 25.168ZM17.414 23.838C17.946 23.838 18.4173 23.6887 18.828 23.39C19.248 23.0913 19.5747 22.662 19.808 22.102C20.0413 21.542 20.158 20.8747 20.158 20.1C20.158 19.3253 20.0413 18.658 19.808 18.098C19.5747 17.538 19.248 17.1087 18.828 16.81C18.4173 16.5113 17.946 16.362 17.414 16.362C16.8727 16.362 16.3967 16.5113 15.986 16.81C15.5753 17.1087 15.2533 17.538 15.02 18.098C14.7867 18.658 14.67 19.3253 14.67 20.1C14.67 20.8747 14.7867 21.542 15.02 22.102C15.2533 22.662 15.5753 23.0913 15.986 23.39C16.3967 23.6887 16.8727 23.838 17.414 23.838ZM24.3321 25V16.88L22.7501 17.244V16.152L24.9201 15.2H25.8721V25H24.3321Z"
      fill="#333333"
    />
  </svg>
);
export default FirstStepActive;
