import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Urls } from 'src/constants';
import { tUser } from 'src/types';

interface iUserContext {
  isLoading: boolean;
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
  isLoading: true,
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const setUserName = async (value: string) => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
      if (user.message) {
        throw new Error('error');
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <UserContext.Provider value={{ isLoading, user, setUserName, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};
