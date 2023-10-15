import { Trophy } from '@/components/Account/Trophy';
import { motion } from 'framer-motion';

interface Props {
  ranking: UserType['ranking'];
}

function Ranking({ ranking }: Props) {
  return (
    <motion.div
      className="w-full max-w-[1000px] flex flex-col justify-start items-center p-5 rounded-lg shadow-sm bg-white"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { duration: 0.5 } }
    >
      <h1 className="text-2xl font-bold mb-4">{ ranking.current ?? 'No Rank' } Ranking</h1>
      <h2 className="text-primary text-sm">You are eligible for <span className="font-bold">20% discount</span> on all products</h2>
      <div className="w-full flex justify-center items-center gap-5">
        { ranking.current && <Trophy ranking={ ranking.current } /> }
        <div className="w-full h-4 bg-primary rounded-full border-2 border-primary mt-2">
          <div className="h-full bg-lightGrey rounded-full" style={ { width: `${ ranking.progress * 100 }%` } }></div>
        </div>
        { ranking.next && <Trophy ranking={ ranking.next } /> }
      </div>
      { ranking.next && (
        <p className="text-primary text-sm mt-2">
          Spend <span className="font-bold">{ ranking.moneyToNextRanking.toFixed(2) }€</span> more to reach <span className="text-primary font-bold">{ ranking.next }</span>
        </p>
      ) }
    </motion.div>
  );
}

export default Ranking;
