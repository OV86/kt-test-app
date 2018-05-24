import React from 'react';
import styled, { keyframes } from 'styled-components';
import EditProperty from './EditProperty';
import ViewProperty from './ViewProperty';
import StyledButton from './StyledButton';

const Container = (props) => {
  // keyframes
  const changeSize = keyframes`
    0% {
      height: ${props.size0};
    }
    100% {
      height: ${props.size100};
    }
  `;

  const backgroundTransition = keyframes`
    0% {
      transform: scale(${props.transition0});
    }
    100% {
      transform: scale(${props.transition100});
  }
  `;

  // components
  const ContentContainer = styled.div.attrs({
    className: 'ContentContainer',
  }) `
    max-width: 800px;
    height: 350px;
    margin: 0 auto 0 auto;
    padding: 0 30px 0 30px;
  `;

  const ContentLayout = styled.div.attrs({
    className: 'ContentLayout',
  }) `
    width: 100%;
    margin: 0 auto 0 auto;
    background: #4b4e51;
    height: 100%;
    min-height: 100vh;
  `;

  const PropertyRow = styled.div.attrs({
    className: 'PropertyRow',
  }) `
    position: relative;
    z-index: 4;
    top: 30px;
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

  const Header = styled.h3.attrs({
    className: 'Header',
  }) `
    margin: 20px;
    z-index: 4;
    text-transform: uppercase;
    position: absolute;
  `;

  const PropertyWrapper = styled.div.attrs({
    className: 'PropertyWrapper',
  }) `
    border-radius: 5px;
    padding-top: 15px;
    position: absolute;
    top: 70px;
    z-index: 3;
    width: 100%;
    height: 65%;
  `;

  const ViewEditContainer = styled.div.attrs({
    className: 'ViewContainer',
  }) `
    margin: 0 20px 0 20px;
    position: absolute;
    z-index: 4;
    width: 90%;
  `;

  const TransitionContainer = styled.div.attrs({
    className: 'TransitionContainer',
  }) `
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    overflow: hidden;
  `;

  const EditTransition = styled.div.attrs({
    className: 'EditTransition',
  }) `
    position: absolute;
    right: -20px;
    bottom: -20px;
    width: 54px;
    height: 54px;
    border-radius: 100%;
    z-index: -99;
    background-color: #25a398;
    animation-name: ${backgroundTransition};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  `;

  return (
    <ContentLayout>
      <ContentContainer>
        <PropertyRow>
          {props.editMode ? '' : <Header>Property</Header>}
          <PropertyWrapper>
            <ViewEditContainer>
              {
                props.editMode ?
                  (
                    <EditProperty
                      opacity0={props.opacity0}
                      opacity100={props.opacity100}
                    />
                  ) :
                  (
                    <ViewProperty
                      opacity0={props.opacity0}
                      opacity100={props.opacity100}
                    />
                  )
              }
            </ViewEditContainer>
          </PropertyWrapper>
          <TransitionContainer>
            <EditTransition />
          </TransitionContainer>
          <StyledButton
            rotation={props.rotation}
            onClick={props.onClick}
            editMode={props.editMode}
          />
        </PropertyRow>
      </ContentContainer>
    </ContentLayout>
  );
};

export default Container;
