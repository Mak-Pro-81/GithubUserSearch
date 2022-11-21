import styled from 'styled-components';
import { Form } from 'antd';
import { mediaQueries, breakpoints } from 'src/styles';

export const StyledSearchForm = styled(Form)`
  display: flex;
  align-items: center;

  ${mediaQueries(599)} {
    flex-direction: column;
    align-items: flex-start;
  }

  .ant-typography-danger {
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.red1};
  }

  .ant-form-item {
    &:nth-child(1) {
      flex: 1;

      ${mediaQueries(599)} {
        margin-bottom: 3rem;
      }
    }

    ${mediaQueries(599)} {
      width: 100%;
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

        ${mediaQueries(599)} {
          margin-right: 1rem;
        }

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

      ${mediaQueries(599)} {
        margin: 0;
        width: 100%;
      }
    }
  }
`;
