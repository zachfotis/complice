import { GiDiamondTrophy } from 'react-icons/gi';
import { RankingNamesEnum } from '@/app/account/page';

interface Props {
  ranking: RankingNamesEnum;
}

export function Trophy({ ranking }: Props) {
  const color = ranking === RankingNamesEnum.BRONZE ? 'text-bronze' : ranking === RankingNamesEnum.SILVER ? 'text-silver' : ranking === RankingNamesEnum.GOLD ? 'text-gold' : 'text-platinum';
  return (
    <GiDiamondTrophy className={ `text-5xl ${ color }` } title={ ranking } />
  );
}
