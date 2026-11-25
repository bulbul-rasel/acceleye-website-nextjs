import type { SVGProps } from "react";

export type IconName =
  | "eye"
  | "shield"
  | "bolt"
  | "users"
  | "lock"
  | "heart"
  | "phone"
  | "mail"
  | "arrow"
  | "menu"
  | "close"
  | "check"
  | "pulse"
  | "chevron"
  | "building"
  | "church"
  | "city"
  | "pin"
  | "server"
  | "sun"
  | "cloud"
  | "mobile"
  | "alert"
  | "search"
  | "layers"
  | "camera"
  | "file"
  | "chat"
  | "wifi"
  | "bulb"
  | "fire"
  | "medical";

const paths: Record<IconName, React.ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.5 3.2-5.5 6.5-5.5s5.9 2 6.5 5.5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M17 14.5c2.4.2 4 1.8 4.5 4.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-9-9.5C2 7 4.3 4.5 7.2 4.5c1.9 0 3.6 1 4.8 2.8 1.2-1.8 2.9-2.8 4.8-2.8 2.9 0 5.2 2.5 4.2 6C19.500 15.400 12 20 12 20Z" />
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.500 7 8.500 6 8.500-6" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.500 4.500 4.500L19 7.500" />,
  pulse: <path d="M3 12h4l2.500-6 4 12 2.500-6H21" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  building: (
    <>
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21v-6h6v6M9 11h.01M15 11h.01" />
    </>
  ),
  church: (
    <>
      <path d="M12 2v5M9.500 4.500h5" />
      <path d="M6 21V11l6-4 6 4v10" />
      <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    </>
  ),
  city: (
    <>
      <path d="M3 21V9h6v12M9 21V4h7v17M16 21v-8h5v8" />
      <path d="M12 8h.01M12 12h.01M12 16h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.100 7-11a7 7 0 0 0-14 0c0 4.900 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.500" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" />
    </>
  ),
  cloud: <path d="M7 18a4.500 4.500 0 0 1-.6-8.960A6 6 0 0 1 18 10a4 4 0 0 1-.5 8H7Z" />,
  mobile: (
    <>
      <rect x="7" y="2.500" width="10" height="19" rx="2.500" />
      <path d="M11 18.500h2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.500" />
      <path d="m20 20-4-4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.500-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.500" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4V5Z" />,
  wifi: (
    <>
      <path d="M2.500 9a14 14 0 0 1 19 0M5.500 12.500a9.500 9.500 0 0 1 13 0M8.500 16a5 5 0 0 1 7 0" />
      <path d="M12 19.500h.01" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.500 10.900c.6.5 1 1.200 1 2.100h5c0-.9.4-1.600 1-2.100A6 6 0 0 0 12 3Z" />
    </>
  ),
  fire: <path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9Z" />,
  medical: (
    <>
      <rect x="3.500" y="3.500" width="17" height="17" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
