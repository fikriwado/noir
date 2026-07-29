const variants = {
  primary: "bg-neon text-black hover:bg-[#c8e600]",
  secondary: "bg-[#f0f0f0] text-[#121212] hover:bg-neon hover:text-black",
  outline: "border border-white/20 text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-6 h-[43px] rounded-full text-base font-bold tracking-widest transition-colors duration-300 select-none cursor-pointer font-[family-name:var(--font-body)]";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
