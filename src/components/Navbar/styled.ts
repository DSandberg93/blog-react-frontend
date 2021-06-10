import styled from 'styled-components';
import Link from 'components/Link';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 56px;
`;

export const NavItem = styled(Link)`
  display: inline-flex;
  height: 100%;
  padding: 0 16px;

  &:hover {
    background: lightcyan;
  }

  &.nav-brand {
    margin-right: auto;
  }

  span {
    margin: auto;
    line-height: 16px;
  }
`;
