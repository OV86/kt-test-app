import React from 'react';
import styled, { keyframes } from 'styled-components';

const View = (props) => {
  const opacity = keyframes`
    0% {
      opacity: ${props.opacity0};
    }
    100% {
      opacity: ${props.opacity100};
    }
  `;

  const ViewProperty = styled.div.attrs({
    className: 'ViewProperty',
  }) `
    display: flex;
    justify-content: space-between;
    animation-name: ${opacity};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-direction: 'normal';
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  const HeaderDiv = styled.div.attrs({
    className: 'Header',
  }) `
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    color: #9da1a5;
  `;

  const BoldDiv = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 400;
  `;

  return (
    <ViewProperty>
      <div>
        <HeaderDiv>Property type</HeaderDiv>
        <BoldDiv>Commercial</BoldDiv>
      </div>
      <div>
        <HeaderDiv>Size</HeaderDiv>
        <BoldDiv>150m2</BoldDiv>
      </div>
      <div>
        <HeaderDiv>Lease period</HeaderDiv>
        <BoldDiv>10 years</BoldDiv>
      </div>
    </ViewProperty>
  );
};

export default View;

