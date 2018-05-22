import React from 'react';
import Container from './Container';

class PropertyDetails extends React.Component {
  state = {
    editMode: '',
    size0: '200px',
    size100: '200px',
    rotation: '0deg',
    fadeInHeightAt0: '0',
    fadeInWidthAt0: '0',
    fadeInMarginTopAt0: '0',
    fadeInMarginLeftAt0: '0',
    fadeInHeightAt100: '0',
    fadeInWidthAt100: '0',
    fadeInMarginTopAt100: '0',
    fadeInMarginLeftAt100: '0',
    opacity0: '0',
    opacity100: '0',
  };

  onClick = () => {
    const rotation = '360deg';
    const size0 = this.state.editMode ? '300px' : '200px';
    const size100 = this.state.editMode ? '200px' : '300px';
    const fadeInHeightAt0 = this.state.editMode ? '300px' : '0';
    const fadeInWidthAt0 = this.state.editMode ? '100%' : '0';
    const fadeInHeightAt100 = this.state.editMode ? '0' : '300px';
    const fadeInWidthAt100 = this.state.editMode ? '0' : '100%';
    const fadeInMarginTopAt0 = this.state.editMode ? '0' : '300px';
    const fadeInMarginLeftAt0 = this.state.editMode ? '0' : '100%';
    const fadeInMarginTopAt100 = this.state.editMode ? '300px' : '0';
    const fadeInMarginLeftAt100 = this.state.editMode ? '100%' : '0';
    const opacity0 = this.state.editMode ? '1' : '0';
    const opacity100 = this.state.editMode ? '0' : '1';

    setTimeout((() => {
      this.setState(() => ({
        size0,
        size100,
        rotation,
        fadeInHeightAt0,
        fadeInWidthAt0,
        fadeInHeightAt100,
        fadeInWidthAt100,
        fadeInMarginTopAt0,
        fadeInMarginLeftAt0,
        fadeInMarginTopAt100,
        fadeInMarginLeftAt100,
        opacity0,
        opacity100,
        editMode: !this.state.editMode,
      }));
    }), 0);
  };

  render() {
    return (
      <Container {...this.state} onClick={this.onClick} />
    );
  }
}

export default PropertyDetails;
