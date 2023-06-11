interface PageTemplateProps {
  children: React.ReactNode;
}
function PageTemplate({ children }: PageTemplateProps) {
  return <main className="w-full max-w-[1680px] mx-auto flex flex-col justify-start items-start">{children}</main>;
}

export default PageTemplate;
