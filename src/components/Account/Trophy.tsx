import { RankingNamesEnum } from '@/constants';
import { GiDiamondTrophy } from 'react-icons/gi';

interface Props {
  rankingName: RankingNamesEnum;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export function Trophy({ rankingName, size = '7xl' }: Props) {
  const sizeClass =
    size === 'xs'
      ? 'text-xs'
      : size === 'sm'
      ? 'text-sm'
      : size === 'md'
      ? 'text-md'
      : size === 'lg'
      ? 'text-lg'
      : size === 'xl'
      ? 'text-xl'
      : size === '2xl'
      ? 'text-2xl'
      : size === '3xl'
      ? 'text-3xl'
      : size === '4xl'
      ? 'text-4xl'
      : size === '5xl'
      ? 'text-5xl'
      : size === '6xl'
      ? 'text-6xl'
      : size === '7xl'
      ? 'text-7xl'
      : '';

  const color =
    rankingName === RankingNamesEnum.BRONZE
      ? 'text-bronze'
      : rankingName === RankingNamesEnum.SILVER
      ? 'text-silver'
      : rankingName === RankingNamesEnum.GOLD
      ? 'text-gold'
      : rankingName === RankingNamesEnum.PLATINUM
      ? 'text-platinum'
      : rankingName === RankingNamesEnum.VIP
      ? 'text-vip'
      : 'text-primary';

  return <GiDiamondTrophy className={`${sizeClass} ${color}`} title={rankingName} />;
}
