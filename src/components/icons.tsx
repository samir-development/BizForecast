import type { SVGProps } from "react";

export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16v-4h4" />
      <path d="M11 16v-8h4" />
      <path d="M15 16v-12h4" />
    </svg>
  ),
};
