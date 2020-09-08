import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function HomePage() {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    // const airURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Build?Grid%20View`
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Gallery?Grid%20View`;
    const getInfo = async () => {
      const res = await axios.get(airURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });

      console.log(res.data.records);
      setExamples(res.data.records);
    };
    getInfo();
    console.log("mounted successfully");
  }, []);

  function getRandom() {
    const index = Math.floor(Math.random() * examples.length);

    return index;
  }

  const showExamples = (ex) => {
    const index = getRandom();
    console.log(ex);
    let sample = {
      size: "",
      type: "",
      att: "",
    };
    sample.size = ex[index].fields.Size;
    sample.type = ex[index].fields.Type;
    sample.att = ex[index].fields.AssignedAttributes;
    return sample;
  };

  // let sample = showExamples(examples);

  return (
    <div>
      Stuff will go here
      <h2>Sample From Gallery</h2>
      <h4>Type: </h4>
      {/* <h1>{sample.type}</h1> */}
      <h4>Size: </h4>
      {/* <h1>{sample.size}</h1> */}
      <h5>Points Of Interest: </h5>
      {/* <h1>{sample.att}</h1> */}
    </div>
  );
}
