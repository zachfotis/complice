import { UserType } from '../../../typings';
import { Trophy } from '@/components/Account/Trophy';

interface Props {
  ranking: UserType['ranking'];
}

function Ranking({ ranking }: Props) {
  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-3">
      <h1 className="text-lg font-medium">Current Rank</h1>
      <p className="text-base font-medium">{ ranking.current || 'No Rank' }</p>
      <div className="w-full flex justify-center items-center gap-5">
        { ranking.current && <Trophy ranking={ ranking.current } /> }
        <div className="w-full h-4 bg-primary rounded-full border-2 border-primary mt-2">
          <div className="h-full bg-lightGrey rounded-full" style={ { width: `${ ranking.progress * 100 }%` } }></div>
        </div>
        { ranking.next && <Trophy ranking={ ranking.next } /> }
      </div>
      { ranking.next && (
        <p className="text-primart text-sm">
          Spend <span>{ ranking.moneyToNextRanking.toFixed(2) }€</span> more to reach <span className="text-primary">{ ranking.next }</span>
        </p>
      ) }
    </div>
  );
}

export default Ranking;
