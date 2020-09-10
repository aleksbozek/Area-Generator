import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowGallery from "./ShowGallery.jsx";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [fetchGallery, setFetchGallery] = useState(false);

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
  }, [fetchGallery]);

  return (
    <div>
      <div>
        <h4>This'll display the areas already made.</h4>
        <p>Use frylife reviews as an example of how to do this.</p>
      </div>
      <div className="review-container">
        {gallery.map((preview) => (
          <ShowGallery
            preview={preview}
            key={preview.id}
            fetchGallery={fetchGallery}
            setFetchGallery={setFetchGallery}
          />
        ))}
      </div>
    </div>
  );
}
