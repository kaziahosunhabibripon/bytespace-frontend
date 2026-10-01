import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/types/icon";

type PaintMode = "stroke" | "fill" | "both" | "custom";

interface IconDefinition {
  mode: PaintMode;
  strokeWidth?: number;
  body: ReactNode;
}

/** Every icon is a 24x24 SVG that inherits `currentColor`. Add new icons here and to `IconName`. */
const icons: Record<IconName, IconDefinition> = {
  search: {
    mode: "stroke",
    body: (
      <>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  bag: {
    mode: "stroke",
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M5 8h14v13H5z" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
      </>
    ),
  },
  star: {
    mode: "fill",
    body: <path d="M12 1.8l3.2 6.6 7.2 1-5.2 5.1 1.2 7.2L12 18.3l-6.4 3.4 1.2-7.2L1.6 9.4l7.2-1z" />,
  },
  chevronDown: { mode: "stroke", body: <polyline points="6 9 12 15 18 9" /> },
  chevronLeft: { mode: "stroke", body: <polyline points="15 18 9 12 15 6" /> },
  chevronRight: { mode: "stroke", body: <polyline points="9 18 15 12 9 6" /> },
  funnel: {
    mode: "both",
    strokeWidth: 1.5,
    body: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
  },
  bars: {
    mode: "fill",
    body: (
      <>
        <rect x="3" y="13" width="4" height="8" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </>
    ),
  },
  category: {
    mode: "stroke",
    body: (
      <>
        <path d="M12 2.5l4 6.5H8z" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <circle cx="17.5" cy="17.5" r="3.7" />
      </>
    ),
  },
  sort: {
    mode: "stroke",
    body: (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="15" y2="12" />
        <line x1="3" y1="18" x2="9" y2="18" />
      </>
    ),
  },
  share: {
    mode: "stroke",
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
  },
  users: {
    mode: "stroke",
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  checkCircle: {
    mode: "custom",
    body: (
      <>
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <polyline points="7 12.5 10.5 16 17 8.5" stroke="#fff" strokeWidth="2.4" fill="none" />
      </>
    ),
  },
  video: {
    mode: "stroke",
    body: (
      <>
        <rect x="2" y="5" width="14" height="14" rx="2.5" />
        <polygon points="22 7.5 16 12 22 16.5 22 7.5" fill="currentColor" />
      </>
    ),
  },
  play: {
    mode: "fill",
    body: <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />,
  },
  resources: {
    mode: "stroke",
    body: (
      <>
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h6l2 2.5h7A1.5 1.5 0 0 1 21 8v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
        <line x1="7" y1="11" x2="17" y2="11" />
        <line x1="7" y1="15" x2="14" y2="15" />
      </>
    ),
  },
  certificate: {
    mode: "stroke",
    body: (
      <>
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
        <circle cx="8.5" cy="10.5" r="2" />
        <path d="M5 16.5c.6-1.6 2-2.3 3.5-2.3s2.9.7 3.5 2.3" />
        <line x1="14.5" y1="9.5" x2="19" y2="9.5" />
        <line x1="14.5" y1="13" x2="19" y2="13" />
      </>
    ),
  },
  consult: {
    mode: "stroke",
    body: (
      <>
        <path d="M4 11a8 8 0 0 1 8-8" />
        <path d="M8 11a4 4 0 0 1 4-4" />
        <circle cx="14.5" cy="15" r="2.4" />
        <path d="M10 21c.4-2.4 2.2-3.4 4.5-3.4S18.6 18.6 19 21" />
      </>
    ),
  },
  facebook: {
    mode: "fill",
    body: (
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    ),
  },
  google: {
    mode: "fill",
    body: (
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    ),
  },
  pathDesign: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M14.5 4.5l5 5L9 20l-5.5 1L4.5 15.5z" />
        <line x1="12" y1="7" x2="17" y2="12" />
        <path d="M3.5 3.5l6 6" />
      </>
    ),
  },
  pathDevelopment: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <rect x="5" y="2.5" width="14" height="19" rx="3" />
        <polyline points="10 9.5 8 12 10 14.5" />
        <polyline points="14 9.5 16 12 14 14.5" />
      </>
    ),
  },
  pathIt: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.6" />
        <path d="M1.8 19h20.4" strokeWidth="3" />
      </>
    ),
  },
  pathBusiness: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
  },
  pathMarketing: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M3 7.5a9 9 0 0 1 9 9" />
        <path d="M3 3a13.5 13.5 0 0 1 13.5 13.5" />
        <circle cx="6.5" cy="12.5" r="1.4" fill="currentColor" />
        <path d="M14 21.5c.2-2.6 1.8-4 4-4s3.8 1.4 4 4" />
        <circle cx="18" cy="13" r="2.5" />
      </>
    ),
  },
  pathPhotography: {
    mode: "stroke",
    strokeWidth: 2.2,
    body: (
      <>
        <path d="M9 4l1.4-1.8h3.2L15 4h3.5A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4z" />
        <circle cx="12" cy="11" r="2.4" />
        <path d="M7.6 17c.5-1.8 2.2-2.6 4.4-2.6s3.9.8 4.4 2.6" />
      </>
    ),
  },
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, ...rest }: IconProps) {
  const { mode, strokeWidth = 2, body } = icons[name];
  const filled = mode === "fill" || mode === "both";
  const stroked = mode === "stroke" || mode === "both";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={stroked ? "currentColor" : "none"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {body}
    </svg>
  );
}
