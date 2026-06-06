export function FloralSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M2 30 C 30 30, 50 18, 60 30 C 70 42, 90 30, 118 30" />
      <path d="M28 30 c -4 -8, 4 -10, 6 -4" />
      <path d="M44 30 c -3 -8, 6 -11, 8 -4" />
      <path d="M68 30 c 3 8, -4 11, -6 4" />
      <path d="M84 30 c 4 -8, -3 -11, -7 -3" />
      <circle cx="60" cy="30" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="30" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="102" cy="30" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CornerOrn({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 78 Q 2 30, 30 22 Q 60 14, 78 2" />
      <path d="M14 78 Q 14 40, 40 32" />
      <circle cx="78" cy="2" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="2" cy="78" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TealRibbon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="none">
      <path
        d="M20 4 C 8 16, 8 30, 20 42 C 32 30, 32 16, 20 4 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M20 38 L 14 56 M 20 38 L 26 56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
