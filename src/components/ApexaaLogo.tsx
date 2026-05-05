interface ApexaaLogoProps {
  className?: string;
  dark?: boolean;
}

export default function ApexaaLogo({ className = "", dark = false }: ApexaaLogoProps) {
  const textColor = dark ? "text-white" : "text-slate-900";
  const accent = "text-[#b388ff]";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="apexaa-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a3a6b" />
            <stop offset="60%" stopColor="#7c4dff" />
            <stop offset="100%" stopColor="#c62828" />
          </linearGradient>
        </defs>
        <path d="M16 3 L29 27 L22 27 L16 14 L10 27 L3 27 Z" fill="url(#apexaa-grad)" />
      </svg>
      <span className={`text-2xl font-semibold tracking-tight ${textColor}`}>
        apexaa<span className={accent}>bio</span>
      </span>
    </div>
  );
}
