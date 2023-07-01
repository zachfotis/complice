import Button from '../common/Button';

interface PaginatorProps {
  productsShown: number;
  totalProducts: number;
}

function Paginator({ productsShown, totalProducts }: PaginatorProps) {
  return (
    <section className="flex flex-col justify-start items-center gap-3">
      <p className="text-base">
        Showing <strong>{productsShown}</strong> of <strong>{totalProducts}</strong> products
      </p>
      {/* Progress Bar */}
      <div className="w-full h-[2px] bg-whiteGrey rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${(productsShown / totalProducts) * 100}%` }}
        ></div>
      </div>
      <div className="mt-2">
        <Button text="Load More" variant="xs-outline" />
      </div>
    </section>
  );
}

export default Paginator;
