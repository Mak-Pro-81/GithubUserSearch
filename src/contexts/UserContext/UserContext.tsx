import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Urls } from 'src/constants';
import { tUser } from 'src/types';

interface iUserContext {
  user: tUser;
  setUserName: (value: string) => void;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

interface IUserContextProvider {
  children: ReactNode;
}

const noop = (): void => {
  // Do nothing
};

export const UserContext = createContext<iUserContext>({
  user: {
    id: 0,
    login: '',
    avatar: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    bio: '',
    twitter: '',
    repos: 0,
    followers: 0,
    following: 0,
    created: '',
    message: '',
  },
  setUserName: (): void => noop(),
  error: false,
  setError: (): void => noop(),
});

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [user, setUser] = useState({
    id: 0,
    login: '',
    avatar: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    bio: '',
    twitter: '',
    repos: 0,
    followers: 0,
    following: 0,
    created: '',
    message: '',
  });

  const [error, setError] = useState(false);

  const setUserName = async (value: string) => {
    try {
      const response = await fetch(`${Urls.GITHUB_USER_BASE_URL}${value}`);
      const user = await response.json();

      const modifiedUser = {
        ...user,
        avatar: user.avatar_url,
        twitter: user.twitter_username,
        created: user.created_at,
        repos: user.public_repos,
      };
      setUser(modifiedUser);

      if (user.message) {
        throw new Error('error');
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUserName, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};
