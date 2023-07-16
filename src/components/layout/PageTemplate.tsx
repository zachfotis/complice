interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({children}: PageTemplateProps) {
  return <main className="mx-auto mb-10 flex w-full flex-1 flex-col justify-start items-stretch gap-10 overflow-hidden">{ children }</main>;
}

export default PageTemplate;
