interface PageTemplateProps {
  children: React.ReactNode;
}
function PageTemplate({ children }: PageTemplateProps) {
  return <main className="flex-1 w-full mx-auto flex flex-col justify-start items-start gap-10 mb-10">{children}</main>;
}

export default PageTemplate;
