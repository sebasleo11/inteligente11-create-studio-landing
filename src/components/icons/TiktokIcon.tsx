
import { LucideProps } from "lucide-react";

export const TiktokIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M19 8v5a7 7 0 0 1-7 7h-1" />
      <path d="M16 8h5" />
      <path d="M17 5.3V3h-5" />
    </svg>
  );
};

export default TiktokIcon;
