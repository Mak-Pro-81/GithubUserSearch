import { StyledStatisticsListItem } from './styles';

interface IStatisticsListItem {
  title: string;
  value: string;
  mode: string;
}

export const StatisticsListItem = ({ title, value, mode }: IStatisticsListItem) => {
  return (
    <StyledStatisticsListItem mode={mode}>
      <span>{title}</span>
      {value}
    </StyledStatisticsListItem>
  );
};
