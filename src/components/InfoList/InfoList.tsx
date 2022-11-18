import { useContext } from 'react';
import { StyledInfoList } from './styles';
import { InfoListItem } from './InfoListItem';
import { tUser } from 'src/types';
import { ThemeContext } from 'src/contexts';
import { ReactComponent as IconLocation } from 'src/assets/icons/icon-location.svg';
import { ReactComponent as IconTwitter } from 'src/assets/icons/icon-twitter.svg';
import { ReactComponent as IconLink } from 'src/assets/icons/icon-website.svg';
import { ReactComponent as IconCompany } from 'src/assets/icons/icon-company.svg';

interface IInfoListItem extends Pick<tUser, 'location' | 'twitter' | 'blog' | 'company'> {
  mode?: string;
}

export const InfoList = (props: IInfoListItem) => {
  const ctx = useContext(ThemeContext);

  const { themeMode } = ctx;

  const icons = [
    <IconLocation key={crypto.randomUUID} />,
    <IconTwitter key={crypto.randomUUID} />,
    <IconLink key={crypto.randomUUID} />,
    <IconCompany key={crypto.randomUUID} />,
  ];
  const text = Object.values({ ...props });

  const data = text.map((text, index) => (
    <InfoListItem key={index} icon={icons[index]} text={text ? text : '---'} mode={themeMode} />
  ));

  return (
    <StyledInfoList
      dataSource={data}
      renderItem={(item: any) => <StyledInfoList.Item>{item}</StyledInfoList.Item>}
    />
  );
};
