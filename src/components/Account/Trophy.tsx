import { GiDiamondTrophy } from 'react-icons/gi';
import { RankingNamesEnum } from '@/constants';

interface Props {
  rankingName: RankingNamesEnum;
}

export function Trophy({ rankingName }: Props) {
  const color =
    rankingName === RankingNamesEnum.BRONZE ? 'text-bronze' :
      rankingName === RankingNamesEnum.SILVER ? 'text-silver' :
        rankingName === RankingNamesEnum.GOLD ? 'text-gold' :
          rankingName === RankingNamesEnum.PLATINUM ? 'text-platinum' :
            rankingName === RankingNamesEnum.VIP ? 'text-vip' :
              'text-primary';
  return (
    <GiDiamondTrophy className={ `text-7xl ${ color }` } title={ rankingName } />
  );
}
