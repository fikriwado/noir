export default function Container({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag className={`px-6 md:px-12 max-w-7xl w-full mx-auto ${className}`} {...props}>
      {children}
    </Tag>
  );
}
