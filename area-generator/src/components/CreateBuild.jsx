import React, { useState } from "react";
import axios from "axios";

const CreateBuild = (props) => {
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");
  // const [author, setAuthor] = useState("Philip J Fry");
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
    // const airURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Gallery`;
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
    // props.Size("");
    // props.Title("");
    // props.AssignedAttributes([]);
    // props.Type("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Run the random gen!</button>
    </form>
  );
};

export default CreateBuild;
