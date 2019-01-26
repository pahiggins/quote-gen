import React from 'react';

// const Title = ({ children }) => {
//   return <h1>{children}</h1>;
// };

import styled from 'styled-components';

const Title = styled.a`
  color: #263238;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #0097a7;
    text-decoration: underline;
  }
`;

export default Title;