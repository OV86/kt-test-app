import React from 'react';
import Input from '@material-ui/core/Input';
import styled, { keyframes } from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Add, Remove } from '@material-ui/icons';

const EditProperty = (props) => {
  const opacity = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const EditDetails = styled.div`
    display: flex;
    justify-content: space-between;
    animation-name: ${opacity};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  const HeaderDiv = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
  `;

  const PropInput = styled(Input) `
    margin: 10px;
    font-size: 14px !important;
    width: 100px;
  `;

  const AddRemoveButton = styled(Button) `
    background-color: #4b4e51 !important;
  `;

  const AddRemoveIcon = styled(Icon) `
    color: white;
  `;

  return (
    <EditDetails>
      <div>
        <HeaderDiv>Property type</HeaderDiv>
        <div>
          <AddRemoveButton variant="fab" mini aria-label="add">
            <AddRemoveIcon><Add /></AddRemoveIcon>
          </AddRemoveButton>
          <PropInput defaultValue="Commercial" />
          <AddRemoveButton variant="fab" mini aria-label="remove">
            <AddRemoveIcon><Remove /></AddRemoveIcon>
          </AddRemoveButton>
        </div>
      </div>
      <div>
        <HeaderDiv>Size</HeaderDiv>
        <div>
          <AddRemoveButton variant="fab" mini aria-label="add">
            <AddRemoveIcon><Add /></AddRemoveIcon>
          </AddRemoveButton>
          <PropInput defaultValue="150m2" />
          <AddRemoveButton variant="fab" mini aria-label="remove">
            <AddRemoveIcon><Remove /></AddRemoveIcon>
          </AddRemoveButton>
        </div>
      </div>
      <div>
        <HeaderDiv>Lease period</HeaderDiv>
        <div>
          <AddRemoveButton variant="fab" mini aria-label="add">
            <AddRemoveIcon><Add /></AddRemoveIcon>
          </AddRemoveButton>
          <PropInput defaultValue="10 years" />
          <AddRemoveButton variant="fab" mini aria-label="remove">
            <AddRemoveIcon><Remove /></AddRemoveIcon>
          </AddRemoveButton>
        </div>
      </div>
    </EditDetails>
  );
};

export default EditProperty;
