interface PageBodyProps {
  children: React.ReactNode;
}

function PageBody({ children }: PageBodyProps) {
  return (
    <div className="w-full max-w-[1680px] mx-auto flex flex-col justify-start items-center gap-10 p-5">{children}</div>
  );
}

export default PageBody;
