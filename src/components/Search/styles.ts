import styled from 'styled-components';
import { Form } from 'antd';

export const StyledSearchForm = styled(Form)`
  display: flex;
  align-items: center;

  .ant-typography-danger {
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.red1};
  }

  .ant-form-item {
    &:nth-child(1) {
      flex: 1;
    }
  }

  .ant-form-item-control-input-content {
    display: flex;
    position: relative;

    .ant-input-affix-wrapper {
      display: flex;
      align-items: center;
      flex: 1;

      .ant-input-prefix {
        width: 2.8rem;
        height: 2.8rem;
        margin-right: 2rem;

        * {
          width: inherit;
          height: inherit;
        }
      }
    }

    .ant-input-prefix {
      svg {
        path {
          fill: ${({ theme: { colors } }) => colors.blue1};
        }
      }
    }

    .ant-input {
      font-size: 2rem;
      border: 0 none;
    }

    .ant-btn {
      margin-left: 1.5rem;
    }
  }
`;
