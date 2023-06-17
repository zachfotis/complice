interface PageTemplateProps {
  children: React.ReactNode;
}
function PageTemplate({ children }: PageTemplateProps) {
  return <main className="w-full mx-auto flex flex-col justify-start items-start gap-10">{children}</main>;
}

export default PageTemplate;
