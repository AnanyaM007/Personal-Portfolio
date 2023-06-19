import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const bounce1 = keyframes`
  from, to {
    transform: translateY(0) scale(1, 1);
    animation-timing-function: ease-in;
  }
  45% {
    transform: translateY(5em) scale(1, 1);
    animation-timing-function: linear;
  }
  50% {
    transform: translateY(5em) scale(1.5, 0.5);
    animation-timing-function: linear;
  }
  55% {
    transform: translateY(5em) scale(1, 1);
    animation-timing-function: ease-out;
  }
`;

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 8px;
  animation: ${bounce1} 1s infinite;
  animation-delay: ${props => props.delay}s;
`;

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100dvh"
    >
      <Ball color="#F3AF00" delay={0} />
      <Ball color="#FFF" delay={0.2} />
      <Ball color="#F3AF00" delay={0.6} />
    </Box>
  );
};

export default Loading;
