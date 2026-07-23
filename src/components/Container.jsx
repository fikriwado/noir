export default function Container({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag className={`max-w-[928px] w-full mx-auto ${className}`} {...props}>
      {children}
    </Tag>
  );
}
