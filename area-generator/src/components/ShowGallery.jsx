import React from "react";

export default function ShowGallery(props) {
  const { Type, AssignedAttributes, Size } = props.preview.fields;

  console.log(props);

  return (
    <div>
      <h5>{Type}</h5>
      <h5>{Size}</h5>
      <h6>{AssignedAttributes}</h6>
    </div>
  );
}
