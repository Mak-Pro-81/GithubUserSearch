import { useContext } from 'react';
import { StyledStatisticsList } from './styles';
import { tUser } from 'src/types';
import { ListItemLayout } from 'antd/lib/list';
import { StatisticsListItem } from './StatisticsListItem';
import { ThemeContext } from 'src/contexts/ThemeContext';

interface IStatisticsList extends Pick<tUser, 'repos' | 'followers' | 'following'> {
  itemLayout?: ListItemLayout;
}

export const StatisticsList = (props: IStatisticsList) => {
  const ctx = useContext(ThemeContext);
  const { themeMode } = ctx;

  const data = Object.entries(props);

  const formatedData = data.map(item => {
    const [title, value] = item;
    return <StatisticsListItem key={title} title={title} value={value} mode={themeMode} />;
  });

  return (
    <StyledStatisticsList
      dataSource={formatedData}
      renderItem={(item: any) => <StyledStatisticsList.Item>{item}</StyledStatisticsList.Item>}
      mode={themeMode}
    />
  );
};
