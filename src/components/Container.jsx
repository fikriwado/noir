export default function Container({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag className={`max-w-[928px] w-full mx-auto px-6 sm:px-8 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
