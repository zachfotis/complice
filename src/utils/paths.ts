const paths: { [key: string]: () => string } = {
  home: () => '/',
  clothing: () => '/clothing',
  accessories: () => '/accessories',
};

const sections: { [key: string]: string[] } = {
  categories: ['home', 'clothing', 'accessories'],
};

export const getPathsToRevalidate = (section: string): string[] | undefined => {
  const sectionPaths = sections[section];
  if (!sectionPaths) return undefined;

  return sectionPaths.map((pathKey) => paths[pathKey]());
};
