import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildOptions from "./BuildOptions.jsx";

export default function BuildPage() {
  const [build, setBuild] = useState([]);

  useEffect(() => {
    // const airURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Build?Grid%20View`
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Build?Grid%20View`;
    const getInfo = async () => {
      const res = await axios.get(airURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setBuild(res.data.records);
    };
    getInfo();
    console.log("mounted successfully");
  }, []);

  return (
    <div>
      <p>This'll contain the main event.</p>
      <BuildOptions
        desert={build[0]}
        woods={build[1]}
        urban={build[2]}
        ocean={build[3]}
      />
    </div>
  );
}
