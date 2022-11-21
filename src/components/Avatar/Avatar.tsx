import { useContext } from 'react';
import { StyledAvatarWrapper, StyledAvatar } from './styles';
import { UserOutlined } from '@ant-design/icons';
import { UserContext } from 'src/contexts';
import Skeleton from 'react-loading-skeleton';

interface IAvatar {
  src?: string | number | undefined;
}

export const Avatar = ({ src, ...props }: IAvatar) => {
  const ctx = useContext(UserContext);
  const { isLoading } = ctx;

  return (
    <StyledAvatarWrapper>
      {isLoading ? (
        <Skeleton circle={true} />
      ) : (
        <StyledAvatar src={src} icon={<UserOutlined {...props} />} />
      )}
    </StyledAvatarWrapper>
  );
};
