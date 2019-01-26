import React from 'react';
import styled from 'styled-components';

const Header = ({ className, title }) => {
  return <h1 className={className} >{title}</h1>;
};

const StyledHeader = styled(Header)`
  background-color: red;
`;

export default StyledHeader;