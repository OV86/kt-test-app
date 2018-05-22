import React from 'react';
import styled, { keyframes } from 'styled-components';


const TitleSection = (props) => {
  // keyframes
  const titleKeyframes = keyframes`
    0% {
      background: green;
    }
    100% {
      background: blue;
    }
  `;
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${props.color};
    background: green;
    animation-name: ${props.isActive ? titleKeyframes : 'none'};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

  return (
    <Wrapper>
      <Title>
        Hello World, this is my first styled component!
      </Title>
    </Wrapper>
  );
};

export default TitleSection;

// animation-name: ${titleKeyframes};
