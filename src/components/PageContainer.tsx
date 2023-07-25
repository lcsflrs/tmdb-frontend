import clsx from "clsx";

export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {}

const PageContainer = ({
  children,
  className,
  ...rest
}: PageContainerProps) => {
  return (
    <main
      className={clsx("flex justify-center bg-gray-200  w-full ", className)}
      {...rest}
    >
      <div
        className="relative flex w-full h-full"
        style={{
          overflow: "overlay",
        }}
      >
        {children}
      </div>
    </main>
  );
};

export default PageContainer;
