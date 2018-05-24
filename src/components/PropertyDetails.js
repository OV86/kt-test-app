import React from 'react';
import Container from './Container';

class PropertyDetails extends React.Component {
  state = {
    editMode: '',
    size0: '200px',
    size100: '200px',
    rotation: '0deg',
    opacity0: '',
    opacity100: '',
    transition0: '0',
    transition100: '0',
  };

  onClick = () => {
    const size0 = this.state.editMode ? '300px' : '200px';
    const size100 = this.state.editMode ? '200px' : '300px';
    const rotation = '360deg';
    const opacity0 = '0';
    const opacity100 = '1';
    const transition0 = this.state.editMode ? '60' : '0';
    const transition100 = this.state.editMode ? '0' : '60';

    setTimeout((() => {
      this.setState(() => ({
        size0,
        size100,
        rotation,
        opacity0,
        opacity100,
        transition0,
        transition100,
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
