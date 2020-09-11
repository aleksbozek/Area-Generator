import React from "react";

export default function ShowGallery(props) {
  const { Type, AssignedAttributes, Size, Title } = props.preview.fields;
  const timestamp = props.preview.createdTime;
  console.log(props);

  return (
    <div className="from-airtable">
      <h4>{Title}</h4>
      <h5>Area Style: </h5>
      <h6>{Type}</h6>
      <h5>Size of Area: </h5>
      <h6>{Size}</h6>
      <h5>Points Of Interest :</h5>
      <h6>{AssignedAttributes}</h6>
      <h5>Made :</h5>
      <h6>{timestamp}</h6>
      <br />
      <br />
    </div>
  );
}
