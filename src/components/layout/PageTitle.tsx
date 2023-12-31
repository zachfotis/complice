interface PageTitleProps {
  title: string;
}

function PageTitle({title}: PageTitleProps) {
  return <h1 className="font-custom uppercase text-h1 md:mt-0">{ title.charAt(0).toUpperCase() + title.slice(1) }</h1>;
}

export default PageTitle;
