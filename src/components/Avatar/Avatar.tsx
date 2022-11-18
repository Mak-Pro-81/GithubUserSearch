import { StyledAvatar } from './styles';
import { UserOutlined } from '@ant-design/icons';

interface IAvatar {
  src?: string | number | undefined;
}

export const Avatar = ({ src, ...props }: IAvatar) => {
  return <StyledAvatar src={src} icon={<UserOutlined />} />;
};
