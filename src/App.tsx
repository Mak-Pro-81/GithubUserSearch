import { useContext } from 'react';
import { ThemeContext, UserContext } from './contexts';
import { Title } from './styles/Typography';
import { MainContainer, MainHeader } from './layouts';

import 'react-loading-skeleton/dist/skeleton.css';

import { dateFormatter } from './helpers';

import {
  ThemeSwitcher,
  ContentBox,
  Search,
  StatisticsList,
  Avatar,
  MainInfo,
  InfoList,
  Loader,
} from './components';
import { Layout } from 'antd';

const App = () => {
  const themeCtx = useContext(ThemeContext);
  const { themeMode } = themeCtx;

  const userCtx = useContext(UserContext);
  const { isLoading, user } = userCtx;

  const { Sider, Content } = Layout;

  const {
    avatar,
    repos,
    followers,
    following,
    name,
    login,
    created,
    bio,
    location,
    twitter,
    blog,
    company,
  } = user;

  const formatedDate = dateFormatter(created);

  return (
    <MainContainer maxWidth="76.8">
      <MainHeader>
        <Title level={2}>DEVFINDER</Title>
        <ThemeSwitcher />
      </MainHeader>
      <ContentBox>
        <Search />
      </ContentBox>
      {login && (
        <ContentBox>
          {isLoading ? (
            <Loader />
          ) : (
            <Layout>
              <Sider>
                <Avatar src={avatar} />
              </Sider>
              <Content>
                <MainInfo
                  name={name}
                  login={login}
                  joined={formatedDate}
                  bio={bio}
                  mode={themeMode}
                />
                <StatisticsList repos={repos} followers={followers} following={following} />
                <InfoList location={location} twitter={twitter} blog={blog} company={company} />
              </Content>
            </Layout>
          )}
        </ContentBox>
      )}
    </MainContainer>
  );
};

export default App;
