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
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="100" rx="18" ry="78" fill="#ffffff" transform="rotate(0 100 100)" />
        <ellipse cx="100" cy="100" rx="18" ry="78" fill="#7c4dff" transform="rotate(45 100 100)" />
        <ellipse cx="100" cy="100" rx="18" ry="78" fill="#ffffff" transform="rotate(90 100 100)" />
        <ellipse cx="100" cy="100" rx="18" ry="78" fill="#7c4dff" transform="rotate(135 100 100)" />
        <circle cx="100" cy="100" r="14" fill="#ffffff" />
      </svg>
      <span className={`text-2xl font-semibold tracking-tight ${textColor}`}>
        apexaa<span className={accent}>bio</span>
      </span>
    </div>
  );
}
