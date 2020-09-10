import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
// import HomePageSample from "./HomePageSample.jsx";

export default function HomePage() {
  const [examples, setExamples] = useState([]);
  let idx = 0;
  let sample = {
    size: "",
    type: "",
    att: "",
  };

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
      console.log(examples);
    };
    getInfo();
    // console.log("mounted successfully");
    console.log(examples);
  }, []);

  useEffect(() => {
    console.log(examples);
    const grabSample = async (ex) => {
      console.log(ex);
      idx = Math.floor(Math.random() * ex.length);
      console.log(idx);
      console.log(examples[idx]);
      // sample.size = examples[idx].fields.Size;
      // sample.type = examples[idx].fields.Type;
      // sample.att = examples[idx].fields.AssignedAttributes;
      console.log(sample);
    };
    grabSample(examples);
  }, [examples]);

  return (
    <div>
      Grab example from HomePageSample
      <br />
      use Gallery and ShowGallery as a reference
      <br />
      add a random gen to grab one as an example.
      <br />
      {/* <HomePageSample list={examples} /> */}
    </div>
  );
}
