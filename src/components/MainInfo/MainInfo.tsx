import { Layout } from 'antd';
import { Title } from 'src/styles/Typography';
import { StyledMainInfo } from './styles';

const { Footer, Sider, Content } = Layout;

interface IMainInfo {
  name: string | number | undefined;
  login: string | number | undefined;
  joined: string | number | undefined;
  bio: string | number | undefined;
  mode: string;
}

export const MainInfo = ({ name, login, joined, bio, mode, ...props }: IMainInfo) => {
  return (
    <StyledMainInfo {...props} mode={mode}>
      <Sider>
        <Title level={2}>{name}</Title>
        <Title level={3}>@{login}</Title>
      </Sider>
      <Content>Joined {joined}</Content>
      <Footer>{bio ? bio : 'This profile has no bio'}</Footer>
    </StyledMainInfo>
  );
};
