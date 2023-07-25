interface ContentContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer = ({ children, className }: ContentContainerProps) => {
  return (
    <div
      className={className}
      style={{
        maxWidth: "1440px",
        // border: "2px solid red",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
