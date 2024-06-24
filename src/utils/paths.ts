const paths: { [key: string]: () => string } = {
  home: () => '/',
  clothing: () => '/clothing',
  accessories: () => '/accessories',
  sales: () => '/sales',
  newArrivals: () => '/new-arrivals',
};

const sections: { [key: string]: string[] } = {
  categories: ['home', 'clothing', 'accessories'],
  products: ['home'],
};

export const getPathsToRevalidate = (section: string): string[] | undefined => {
  const sectionPaths = sections[section];
  if (!sectionPaths) return undefined;

  return sectionPaths.map((pathKey) => paths[pathKey]());
};
