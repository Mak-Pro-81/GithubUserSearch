import { useState, useContext } from 'react';
import { Input, Button } from 'src/components';
import { StyledSearchForm } from './styles';
import { SearchOutlined } from '@ant-design/icons';
import { UserContext } from 'src/contexts';
import { Typography } from 'antd';
const { Text } = Typography;

export const Search = () => {
  const ctx = useContext(UserContext);

  const { user, setUserName, error, setError } = ctx;

  const [form] = StyledSearchForm.useForm();

  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsEmpty(e.target.value.length > 0 ? false : true);
  };

  const onFinish = (values: any) => {
    setError(false);
    if (values.username) {
      setUserName(values.username);
      setIsEmpty(true);
      form.resetFields();
    }
  };

  return (
    <StyledSearchForm onFinish={onFinish} autoComplete="off" form={form}>
      <StyledSearchForm.Item name="username">
        <Input
          placeholder="Search Github username..."
          prefix={<SearchOutlined />}
          onChange={onChange}
        />
      </StyledSearchForm.Item>
      {error && <Text type="danger">Not Found</Text>}
      <StyledSearchForm.Item>
        <Button type="submit" disabled={isEmpty}>
          Search
        </Button>
      </StyledSearchForm.Item>
    </StyledSearchForm>
  );
};
