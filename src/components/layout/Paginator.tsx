import Button from '../common/Button';

interface PaginatorProps {
  productsShown: number;
  totalProducts: number;
}

function Paginator({ productsShown, totalProducts }: PaginatorProps) {
  return (
    <section className="flex flex-col items-center justify-start gap-3">
        <p className="text-base">
            Showing <strong>{productsShown}</strong> of <strong>{totalProducts}</strong> products
        </p>
        {/* Progress Bar */}
        <div className="w-full overflow-hidden rounded-full h-[2px] bg-whiteGrey">
            <div
                className="h-full rounded-full bg-primary"
                style={{width: `${(productsShown / totalProducts) * 100}%`}}
            ></div>
        </div>
        <div className="mt-2">
            <Button text="Load More" variant="xs-outline"/>
        </div>
    </section>
  );
}

export default Paginator;
