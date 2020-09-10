import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowGallery from "./ShowGallery.jsx";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  let galCount = 1;
  useEffect(() => {
    console.log("component has mounted");
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Gallery?Grid%20View`;
    const getGallery = async () => {
      const res = await axios.get(airURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGallery(res.data.records);
    };
    getGallery();
  }, []);

  return (
    <div>
      <div>
        <h3>Locations made in the past.</h3>
      </div>
      <div className="review-container">
        {gallery.map((preview) => (
          <>
            <h4>#{galCount++}</h4>
            <ShowGallery
              preview={preview}
              key={preview.id}
              galCount={galCount}
            />
          </>
        ))}
      </div>
    </div>
  );
}
