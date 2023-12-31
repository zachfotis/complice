interface PageBodyProps {
  children: React.ReactNode;
}

function PageBody({children}: PageBodyProps) {
  return (
    <div className="relative mx-auto flex-auto flex w-full flex-col items-center justify-start gap-10 p-5 max-w-[1680px]">{ children }</div>
  );
}

export default PageBody;
