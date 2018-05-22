import React from 'react';
import styled, { keyframes } from 'styled-components';
import EditProperty from './EditProperty';
import ViewProperty from './ViewProperty';
import StyledButton from './StyledButton';

const Container = (props) => {
  const changeSize = keyframes`
    0% {
      height: ${props.size0};
    }
    100% {
      height: ${props.size100};
    }
  `;

  const property = keyframes`
    0% {
      height: ${props.fadeInHeightAt0};
      width: ${props.fadeInWidthAt0};
      margin-top: ${props.fadeInMarginTopAt0};
      margin-left: ${props.fadeInMarginLeftAt0};
    }
    100% {
      height: ${props.fadeInHeightAt100};
      width: ${props.fadeInWidthAt100};
      margin-top: ${props.fadeInMarginTopAt100};
      margin-left: ${props.fadeInMarginLeftAt100};
    }
  `;

  const ContainerDiv = styled.div`
    width: 70%;
    margin: 0 auto 0 auto;
  `;

  const Property = styled.div`
    border-radius: 5px;
  `;

  const View = styled.div`
    padding: 20px 70px 0 70px;
  `;

  const PropertyRow = styled.div`
    border-radius: 5px;
    width: 100%;
    background: #e8e9ed;
    height: 200px;
    animation-name: ${changeSize};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  const FadeInDiv = styled.div`
    border-radius: 5px;
    margin: 0 auto 0 auto;
    width: 0;
    background: #25a398;
    height: 0;
    z-index: 10;
    animation-name: ${property};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  const Header = styled.h3`
    padding: 30px;
    text-transform: uppercase;
  `;

  return (
    <ContainerDiv>
      <PropertyRow>
        <Property>
          <Header>Property</Header>
          <View>
            {
              props.editMode ?
                (
                  <EditProperty />
                ) :
                (
                  <ViewProperty />
                )
            }
          </View>
        </Property>
      </PropertyRow>
      <StyledButton
        rotation={props.rotation}
        onClick={props.onClick}
        editMode={props.editMode}
      />
      <FadeInDiv />
    </ContainerDiv>
  );
};

export default Container;
