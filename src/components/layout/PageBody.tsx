interface PageBodyProps {
  children: React.ReactNode;
}

function PageBody({children}: PageBodyProps) {
  return (
    <div className="relative max-w-[1680px] min-h-[100%] mx-auto flex-auto flex w-full flex-col items-center justify-start gap-10 p-5">{ children }</div>
  );
}

export default PageBody;
