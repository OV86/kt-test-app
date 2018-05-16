import React from 'react';

const EditPropertyDetails = (props) => (
  <div>
    <div className="edit-property">
      <div>Edit details here</div>
      <div>Type: <input type="text" value={props.type} /></div>
      <div>Size: <input type="text" value={props.size} /></div>
      <div>Lease: <input type="text" value={props.lease} /></div>
    </div>
  </div>

);

export default EditPropertyDetails;
