import { SVGProps } from 'react';

const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 3.75C11.4968 3.75 11.0001 3.8389 10.5389 4.01009C10.0778 4.18126 9.66369 4.43037 9.31855 4.73966C8.97357 5.04881 8.70487 5.41133 8.52333 5.80406C8.45119 5.96014 8.3932 6.12013 8.34951 6.28259H15.6505C15.6068 6.12013 15.5488 5.96014 15.4767 5.80407C15.2951 5.41133 15.0264 5.04881 14.6815 4.73966C14.3363 4.43037 13.9222 4.18126 13.4611 4.01009C12.9999 3.8389 12.5032 3.75 12 3.75ZM17.1851 6.28259C17.1189 5.90205 17.0025 5.53002 16.8383 5.17471C16.5675 4.58893 16.1733 4.06235 15.6825 3.62258C15.1919 3.18295 14.6138 2.83798 13.9831 2.60384C13.3523 2.36972 12.6787 2.25 12 2.25C11.3213 2.25 10.6477 2.36972 10.0169 2.60384C9.38616 2.83798 8.80808 3.18295 8.31749 3.62258C7.82675 4.06235 7.43251 4.58893 7.16175 5.17471C6.99752 5.53002 6.88108 5.90205 6.81485 6.28259H3C2.58579 6.28259 2.25 6.61838 2.25 7.03259C2.25 7.44681 2.58579 7.78259 3 7.78259H4.25V12.1759C4.25 13.8212 4.48148 15.4583 4.93757 17.0383C5.61878 19.3981 7.58166 21.1607 9.9933 21.5682L10.151 21.5949C11.3751 21.8017 12.6248 21.8017 13.8489 21.5949L14.0067 21.5682C16.4183 21.1607 18.3812 19.3981 19.0624 17.0383C19.5185 15.4583 19.75 13.8212 19.75 12.1758V7.78259H21C21.4142 7.78259 21.75 7.44681 21.75 7.03259C21.75 6.61838 21.4142 6.28259 21 6.28259H17.1851ZM18.25 7.78259H5.75V12.1759C5.75 13.6806 5.9617 15.1776 6.37873 16.6223C6.90157 18.4335 8.40523 19.7786 10.2432 20.0892L10.401 20.1158C11.4596 20.2947 12.5404 20.2947 13.599 20.1158L13.7568 20.0892C15.5947 19.7786 17.0984 18.4335 17.6212 16.6223C18.0383 15.1776 18.25 13.6806 18.25 12.1758V7.78259Z"
        fill="#141519"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 11.25C10.4142 11.25 10.75 11.5858 10.75 12V16C10.75 16.4142 10.4142 16.75 10 16.75C9.58579 16.75 9.25 16.4142 9.25 16V12C9.25 11.5858 9.58579 11.25 10 11.25ZM14 11.25C14.4142 11.25 14.75 11.5858 14.75 12V16C14.75 16.4142 14.4142 16.75 14 16.75C13.5858 16.75 13.25 16.4142 13.25 16V12C13.25 11.5858 13.5858 11.25 14 11.25Z"
        fill="#141519"
      />
    </svg>
  );
};
export default TrashIcon;