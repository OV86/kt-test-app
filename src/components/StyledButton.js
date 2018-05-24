import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Edit, Close } from '@material-ui/icons';
import styled, { keyframes } from 'styled-components';

const StyledButton = (props) => {
  const rollButton = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(${props.rotation});
  }
  `;

  const EditButton = styled(Button).attrs({
    className: 'EditButton',
  }) `
    animation-name: ${rollButton};
    z-index: 4 !important;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: ${props.editMode ? 'normal' : 'reverse'};
    animation-play-state: running;
    background-color: #25a398 !important;
  `;

  const EditCloseIcon = styled(Icon) `
    color: white;
  `;

  const ButtonContainer = styled.div.attrs({
    className: 'ButtonContainer',
  }) `
    position: absolute;
    bottom: -20px;
    right: -20px;
    z-index: 4;
  `;

  return (
    <ButtonContainer>
      <EditButton
        onClick={props.onClick}
        variant="fab"
        aria-label="edit"
      ><EditCloseIcon>{props.editMode ? <Close /> : <Edit />}</EditCloseIcon>
      </EditButton>
    </ButtonContainer>
  );
};

export default StyledButton;

