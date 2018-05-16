import React from 'react';
import EditPropertyDetails from './EditPropertyDetails';

class PropertyDetails extends React.Component {
  state = {
    viewMode: true,
    propertyType: 'Private',
    propertySize: '147m2',
    leasePeriod: '10 years',
  };

  onClick = () => {
    this.setState(() => ({ viewMode: !this.state.viewMode }));
  };

  render() {
    return (
      <div>
        {
          this.state.viewMode ? (
            <div className="view-details">
              <h3>Nøkkelinfo</h3>
              <div className="container">
                <div className="propery-type">
                  <div>Property type</div>
                  <div>{this.state.propertyType}</div>
                </div>
                <div className="size">
                  <div>Size</div>
                  <div>{this.state.propertySize}</div>
                </div>
                <div className="period">
                  <div>Lease period</div>
                  <div>{this.state.leasePeriod}</div>
                </div>
                <button onClick={this.onClick}>Edit</button>
              </div>
            </div>
          ) :
            (
              <EditPropertyDetails
                type={this.state.propertyType}
                size={this.state.propertySize}
                lease={this.state.leasePeriod}
              />
            )
        }
      </div>
    );
  }
}

export default PropertyDetails;
