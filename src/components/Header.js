import React from 'react';
import styled from 'styled-components';

const Header = ({ className }) => {
  return <h1 className={className} >Opinionated Parlance...</h1>;
};

const StyledHeader = styled(Header)`
  background-color: red;
`;

export default StyledHeader;