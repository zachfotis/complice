interface PageTemplateProps {
  children: React.ReactNode;
}
function PageTemplate({ children }: PageTemplateProps) {
  return <main className="mx-auto mb-10 flex w-full flex-1 flex-col items-start justify-start gap-10">{children}</main>;
}

export default PageTemplate;
