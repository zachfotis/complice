import { GiDiamondTrophy } from 'react-icons/gi';

interface Props {
  ranking: RankingNamesEnum;
}

enum RankingNamesEnum {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

export function Trophy({ ranking }: Props) {
  const color = ranking === RankingNamesEnum.BRONZE ? 'text-bronze' : ranking === RankingNamesEnum.SILVER ? 'text-silver' : ranking === RankingNamesEnum.GOLD ? 'text-gold' : 'text-platinum';
  return (
    <GiDiamondTrophy className={ `text-5xl ${ color }` } title={ ranking } />
  );
}
