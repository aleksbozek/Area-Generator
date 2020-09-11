import React, { useState } from "react";
import axios from "axios";

const CreateBuild = (props) => {
  const { AssignedAttributes, Type, Size, Title } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      Type,
      Size,
      AssignedAttributes,
      Title,
    };
    fields.AssignedAttributes = fields.AssignedAttributes.join();
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Gallery?Grid%20View`;
    await axios.post(
      airURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    fields.Size("");
    fields.Title("");
    fields.AssignedAttributes([]);
    fields.Type("");
    alert.show(``);
  };
  // let gLink = ``;
  // const alertTest = (e) => {
  //   e.preventDefault();
  //   console.log(`alert test`);
  //   gLink = `http://localhost:3000/Gallery`;
  // };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Run the random gen!</button>
      </form>
      <br />
      {/* <p>{gLink}</p> */}
      <br />
      {/* <form onSubmit={alertTest}>
        <button type="submit">Alert Test</button>
      </form> */}
    </>
  );
};

export default CreateBuild;
