import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8Zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm9.446 9.032 1.504 1.503-1.415 1.415-1.503-1.504a4 4 0 1 1 1.414-1.414ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

export default Logo;
