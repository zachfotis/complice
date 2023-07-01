interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return <h1 className="font-custom text-h1">{title}</h1>;
}

export default PageTitle;
