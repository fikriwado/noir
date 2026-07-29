export default function Container({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag className={`px-6 md:px-0 max-w-[928px] w-full mx-auto ${className}`} {...props}>
      {children}
    </Tag>
  );
}
