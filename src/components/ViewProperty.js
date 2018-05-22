import React from 'react';
import styled from 'styled-components';

const ViewProperty = (props) => {
  const ViewDetails = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const HeaderDiv = styled.div`
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
    <ViewDetails>
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
    </ViewDetails>
  );
};

export default ViewProperty;

