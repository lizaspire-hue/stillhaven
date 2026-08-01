export function PawLogo({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      <path d="M4 18c0-3 3.5-5 8-5s8 2 8 5" />
      <circle cx="7.5" cy="8.5" r="1.6" />
      <circle cx="12" cy="6.5" r="1.6" />
      <circle cx="16.5" cy="8.5" r="1.6" />
    </svg>
  )
}
