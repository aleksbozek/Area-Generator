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

      console.log(res.data);
      setExamples(res.data.records);
    };
    // getInfo();
    console.log("mounted successfully");
  }, []);

  function getRandom() {
    return Math.floor(Math.random() * examples.length);
  }

  const showExamples = (ex) => {
    getRandom();
    console.log(ex);
  };

  return (
    <div>
      {/* <h3>{examples.records[0].Type}</h3> */}
      Stuff will go here
    </div>
  );
}
